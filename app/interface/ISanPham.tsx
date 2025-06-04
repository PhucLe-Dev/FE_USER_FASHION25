export interface IVariant {
  _id: string;
  sku: string;
  kich_thuoc: string;
  mau_sac: string;
  gia: number;
  gia_km: number;
  phan_tram_km: number;
  so_luong: number;
  so_luong_da_ban: number;
  hinh_chinh: string;
  hinh_thumbnail: string[];
}

export interface ILoai {
  _id: string;                
  id: number;                 
  ten_loai: string;           
  mo_ta: string;            
  hinh: string;             
  thu_tu: number;             
  an_hien: boolean;          
  meta_title: string;         
  meta_description: string;  
  meta_keywords: string;     
  created_at: string;         
  updated_at: string;        
  slug: string;             
  __v: number;           
}

export interface IThuongHieu {
  _id: string;
  id: number;
  ten_thuong_hieu: string;
  mo_ta: string;
  hinh: string;
  an_hien: boolean;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
  slug: string;
}


export interface ISanPham {
  _id: string;
  ten_sp: string;
  slug: string;
  id_loai: number;
  id_thuong_hieu: number;
  mo_ta: string;
  chat_lieu: string;
  xuat_xu: string;
  variants: IVariant[];
  hot: boolean;
  an_hien: boolean;
  luot_xem: number;
  tags: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
  thuong_hieu: IThuongHieu;
  loai_san_pham: ILoai;
  __v: number;
}