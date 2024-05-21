import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h1>English teachers for private and group lessons</h1>
                        <p>Looking for an online or offline English tutor? Malinur is the leading language learning platform!</p>
                        <ul>
                            <li>You can choose from 50 English teachers with an average rating of 4.9 out of 5 stars given by 1844 customers.</li>
                            <li>Book a lesson with a private English teacher today and start learning.</li>
                            <li>Not entirely happy with your tutor? No worries, Preply offers free tutor replacement till you're 100% satisfied.</li>
                        </ul>
                        <p className="special-text">
                            Practice speaking with other students about current events and other topics.
                            Talk with students in real social settings and learn about other cultures.
                        </p>
                    </div>
                    <div className="col">
                        <Image src="/images/home_img.jpg" alt="Home Image" className="img-fluid image-home" width={500} height={300} />
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4">
                <div className="text-about">
                    <div className="col mx-auto">
                        <p className="mr-3 d-inline-block">Want to try but still in doubt?</p>
                        <p><Link href="pages/reviews" className="custom-link">See the reviews of the students</Link></p>
                    </div>
                </div>
                <div className="text-about">
                    <div className="col mx-auto">
                        <p className="mr-3 d-inline-block">Want to know more about teachers?</p>
                        <p><Link href="pages/teachers" className="custom-link">Learn more about teachers</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
