import FooterBootom from "./FooterBottom"
import FooterTop from "./FooterTop"

export default function Footer() {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <FooterTop />
                <FooterBootom />
            </div>
        </div>
    )
}