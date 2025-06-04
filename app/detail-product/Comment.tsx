"use client";
import { useState } from "react";

export default function Comment() {
  // Giả sử người dùng hiện tại là "Jisoo"
  const currentUser = "Jisoo";

  // Danh sách comment mẫu (bao gồm replies)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "Feb. 8, 2022",
      content: "Good bro.",
      replies: [
        {
          id: 1,
          author: "Jisoo",
          avatar: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/3/19/jisoo2-17423690993551392151595.jpg",
          date: "Feb. 9, 2022",
          content: "Thanks! Glad you liked it.",
        },
        {
          id: 2,
          author: "Michael Gough",
          avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
          date: "Feb. 9, 2022",
          content: "Really helpful comment!",
        },
      ],
    },
    {
      id: 2,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "Feb. 8, 2022",
      content: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
      replies: [],
    },
    {
      id: 3,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "Feb. 8, 2022",
      content: "Good bro.",
      replies: [],
    },
    {
      id: 4,
      author: "Michael Gough",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      date: "Feb. 8, 2022",
      content: "Good bro.",
      replies: [],
    },
  ]);

  // State để quản lý comment mới, reply, và chỉnh sửa
  const [newComment, setNewComment] = useState("");
  const [replyForms, setReplyForms] = useState<{ [key: number]: boolean }>({});
  const [newReplies, setNewReplies] = useState<{ [key: number]: string }>({});
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({});
  const [editComment, setEditComment] = useState<{ [key: number]: boolean }>({});
  const [editReply, setEditReply] = useState<{ [key: number]: boolean }>({});
  const [editCommentContent, setEditCommentContent] = useState<{ [key: number]: string }>({});
  const [editReplyContent, setEditReplyContent] = useState<{ [key: number]: string }>({});
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({}); // State để quản lý dropdown

  // Hàm xử lý gửi comment mới
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: currentUser,
          avatar: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/3/19/jisoo2-17423690993551392151595.jpg",
          date: new Date().toLocaleDateString(),
          content: newComment,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  // Hàm xử lý Enter cho comment mới
  const handleCommentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment(e as any);
    }
  };

  // Hàm toggle form reply
  const toggleReplyForm = (commentId: number) => {
    setReplyForms((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // Hàm toggle hiển thị replies
  const toggleShowReplies = (commentId: number) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // Hàm xử lý gửi reply
  const handleSubmitReply = (e: React.FormEvent, commentId: number) => {
    e.preventDefault();
    const replyContent = newReplies[commentId];
    if (replyContent && replyContent.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: comment.replies.length + 1,
                    author: currentUser,
                    avatar: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/3/19/jisoo2-17423690993551392151595.jpg",
                    date: new Date().toLocaleDateString(),
                    content: replyContent,
                  },
                ],
              }
            : comment
        )
      );
      setNewReplies((prev) => ({
        ...prev,
        [commentId]: "",
      }));
      setReplyForms((prev) => ({
        ...prev,
        [commentId]: false,
      }));
    }
  };

  // Hàm xử lý Enter cho reply
  const handleReplyKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, commentId: number) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitReply(e as any, commentId);
    }
  };

  // Hàm xóa comment
  const handleDeleteComment = (commentId: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
      setReplyForms((prev) => ({
        ...prev,
        [commentId]: false,
      }));
      setShowReplies((prev) => ({
        ...prev,
        [commentId]: false,
      }));
      setEditComment((prev) => ({
        ...prev,
        [commentId]: false,
      }));
    }
  };

  // Hàm xóa reply
  const handleDeleteReply = (commentId: number, replyId: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa reply này không?")) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: comment.replies.filter((reply) => reply.id !== replyId),
              }
            : comment
        )
      );
      setEditReply((prev) => ({
        ...prev,
        [replyId]: false,
      }));
    }
  };

  // Hàm toggle chỉnh sửa comment
  const toggleEditComment = (commentId: number, content: string) => {
    setEditComment((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
    setEditCommentContent((prev) => ({
      ...prev,
      [commentId]: content,
    }));
  };

  // Hàm lưu chỉnh sửa comment
  const handleSaveEditComment = (commentId: number) => {
    const updatedContent = editCommentContent[commentId];
    if (updatedContent && updatedContent.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: updatedContent }
            : comment
        )
      );
      setEditComment((prev) => ({
        ...prev,
        [commentId]: false,
      }));
    }
  };

  // Hàm xử lý Enter cho chỉnh sửa comment
  const handleEditCommentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, commentId: number) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveEditComment(commentId);
    }
  };

  // Hàm toggle chỉnh sửa reply
  const toggleEditReply = (replyId: number, content: string) => {
    setEditReply((prev) => ({
      ...prev,
      [replyId]: !prev[replyId],
    }));
    setEditReplyContent((prev) => ({
      ...prev,
      [replyId]: content,
    }));
  };

  // Hàm lưu chỉnh sửa reply
  const handleSaveEditReply = (commentId: number, replyId: number) => {
    const updatedContent = editReplyContent[replyId];
    if (updatedContent && updatedContent.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === replyId ? { ...reply, content: updatedContent } : reply
                ),
              }
            : comment
        )
      );
      setEditReply((prev) => ({
        ...prev,
        [replyId]: false,
      }));
    }
  };

  // Hàm xử lý Enter cho chỉnh sửa reply
  const handleEditReplyKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, commentId: number, replyId: number) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveEditReply(commentId, replyId);
    }
  };

  // Hàm toggle dropdown
  const toggleDropdown = (dropdownId: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId],
    }));
  };

  return (
    <div id="comment-section" className="container mx-auto px-6 py-10">
      {/* Tiêu đề */}
      <div className="text-left mb-8">
        <p className="text-gray-700 text-xl font-semibold uppercase tracking-wide">
          CÙNG XEM NHỮNG ĐÁNH GIÁ VỀ SẢN PHẨM NÀY
        </p>
      </div>

      {/* Form nhập comment */}
      <div className="mb-8 bg-white shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/3/19/jisoo2-17423690993551392151595.jpg"
            alt="Jisoo"
            className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200"
          />
          <span className="text-lg font-medium text-gray-800">{currentUser}</span>
        </div>
        <form onSubmit={handleSubmitComment}>
          <textarea
            id="comment"
            className="w-full p-4 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ebbd5b] transition-all duration-300 resize-none"
            placeholder="Viết bình luận của bạn..."
            rows={3}
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleCommentKeyDown}
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-5 py-2 bg-transparent border border-[#ebbd5b] text-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition-all duration-300 font-medium tracking-wide"
          >
            Đăng bình luận
          </button>
        </form>
      </div>

      {/* Danh sách comment với giới hạn chiều cao và cuộn */}
      <div className="max-h-[600px] overflow-y-auto space-y-6">
        {comments.map((comment) => (
          <div key={comment.id}>
            <article className="p-6 bg-white shadow-md">
              <footer className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 object-cover rounded-full mr-3 border border-gray-200"
                    src={comment.avatar}
                    alt={comment.author}
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{comment.author}</p>
                    <p className="text-sm text-gray-500">
                      <time title={comment.date}>{comment.date}</time>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(`comment${comment.id}`)}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {dropdownOpen[`comment${comment.id}`] && (
                    <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg border border-gray-200 z-10">
                      <ul className="py-1 text-sm text-gray-700">
                        {comment.author === currentUser && (
                          <li>
                            <button
                              onClick={() => {
                                toggleEditComment(comment.id, comment.content);
                                toggleDropdown(`comment${comment.id}`);
                              }}
                              className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-200"
                            >
                              Sửa
                            </button>
                          </li>
                        )}
                        {comment.author === currentUser && (
                          <li>
                            <button
                              onClick={() => {
                                handleDeleteComment(comment.id);
                                toggleDropdown(`comment${comment.id}`);
                              }}
                              className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-200"
                            >
                              Xóa
                            </button>
                          </li>
                        )}
                        <li>
                          <button
                            onClick={() => toggleDropdown(`comment${comment.id}`)}
                            className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-200"
                          >
                            Báo cáo
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </footer>

              {/* Hiển thị nội dung comment hoặc form chỉnh sửa */}
              {editComment[comment.id] ? (
                <div className="mb-3">
                  <textarea
                    className="w-full p-4 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ebbd5b] transition-all duration-300 resize-none"
                    value={editCommentContent[comment.id] || ""}
                    onChange={(e) =>
                      setEditCommentContent((prev) => ({
                        ...prev,
                        [comment.id]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => handleEditCommentKeyDown(e, comment.id)}
                    rows={3}
                  ></textarea>
                  <button
                    onClick={() => handleSaveEditComment(comment.id)}
                    className="mt-2 px-5 py-2 bg-transparent border border-[#ebbd5b] text-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition-all duration-300 font-medium tracking-wide"
                  >
                    Lưu
                  </button>
                </div>
              ) : (
                <p className="text-gray-800 leading-relaxed">{comment.content}</p>
              )}

              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  onClick={() => toggleReplyForm(comment.id)}
                  className="flex items-center text-sm text-gray-600 hover:text-[#ebbd5b] transition-all duration-200 font-medium"
                >
                  <svg
                    className="mr-1.5 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Trả lời
                </button>
                {comment.replies.length > 0 && (
                  <button
                    type="button"
                    onClick={() => toggleShowReplies(comment.id)}
                    className="text-sm text-[#ebbd5b] hover:underline transition-all duration-200 font-medium"
                  >
                    {showReplies[comment.id]
                      ? "Ẩn replies"
                      : `Xem ${comment.replies.length} replies`}
                  </button>
                )}
              </div>

              {/* Form nhập reply */}
              {replyForms[comment.id] && (
                <div className="mt-4 ml-6 lg:ml-12">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/3/19/jisoo2-17423690993551392151595.jpg"
                      alt="Jisoo"
                      className="w-8 h-8 rounded-full object-cover mr-3 border border-gray-200"
                    />
                    <span className="text-base font-medium text-gray-800">{currentUser}</span>
                  </div>
                  <form onSubmit={(e) => handleSubmitReply(e, comment.id)}>
                    <textarea
                      className="w-full p-4 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ebbd5b] transition-all duration-300 resize-none"
                      placeholder="Viết câu trả lời của bạn..."
                      rows={2}
                      required
                      value={newReplies[comment.id] || ""}
                      onChange={(e) =>
                        setNewReplies((prev) => ({
                          ...prev,
                          [comment.id]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => handleReplyKeyDown(e, comment.id)}
                    ></textarea>
                    <button
                      type="submit"
                      className="mt-2 px-5 py-2 bg-transparent border border-[#ebbd5b] text-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition-all duration-300 font-medium tracking-wide"
                    >
                      Gửi trả lời
                    </button>
                  </form>
                </div>
              )}
            </article>

            {/* Hiển thị replies nếu được toggle */}
            {showReplies[comment.id] && comment.replies.length > 0 && (
              <div className="ml-6 lg:ml-12 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <article key={reply.id} className="p-5 bg-gray-50 shadow-sm">
                    <footer className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <img
                          className="w-8 h-8 object-cover rounded-full mr-3 border border-gray-200"
                          src={reply.avatar}
                          alt={reply.author}
                        />
                        <div>
                          <p className="text-base font-medium text-gray-800">{reply.author}</p>
                          <p className="text-sm text-gray-500">
                            <time title={reply.date}>{reply.date}</time>
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(`reply${reply.id}`)}
                          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all duration-200"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                          <span className="sr-only">Reply settings</span>
                        </button>
                        {dropdownOpen[`reply${reply.id}`] && (
                          <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg border border-gray-200 z-10">
                            <ul className="py-1 text-sm text-gray-700">
                              {reply.author === currentUser && (
                                <li>
                                  <button
                                    onClick={() => {
                                      toggleEditReply(reply.id, reply.content);
                                      toggleDropdown(`reply${reply.id}`);
                                    }}
                                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-200"
                                  >
                                    Sửa
                                  </button>
                                </li>
                              )}
                              {reply.author === currentUser && (
                                <li>
                                  <button
                                    onClick={() => {
                                      handleDeleteReply(comment.id, reply.id);
                                      toggleDropdown(`reply${reply.id}`);
                                    }}
                                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-200"
                                  >
                                    Xóa
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </footer>

                    {/* Hiển thị nội dung reply hoặc form chỉnh sửa */}
                    {editReply[reply.id] ? (
                      <div className="mb-3">
                        <textarea
                          className="w-full p-4 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ebbd5b] transition-all duration-300 resize-none"
                          value={editReplyContent[reply.id] || ""}
                          onChange={(e) =>
                            setEditReplyContent((prev) => ({
                              ...prev,
                              [reply.id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => handleEditReplyKeyDown(e, comment.id, reply.id)}
                          rows={2}
                        ></textarea>
                        <button
                          onClick={() => handleSaveEditReply(comment.id, reply.id)}
                          className="mt-2 px-5 py-2 bg-transparent border border-[#ebbd5b] text-[#ebbd5b] hover:bg-[#ebbd5b] hover:text-white transition-all duration-300 font-medium tracking-wide"
                        >
                          Lưu
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-800 leading-relaxed">{reply.content}</p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}