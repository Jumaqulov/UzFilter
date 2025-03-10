import React, { Fragment } from 'react'

export default function ChooseUs() {
    return (
        <Fragment>
            <h3>WHY CHOOSE US?</h3>
            <div className='choose_box'>
                <div className="choose_left">
                    <div className="background"></div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Our Suppliers</h2>
                            We build long-term and honest relationships with our suppliers and want to attract those who share our values. LLC “Evro Prom Lider” selects partners based on key criteria, such as technical capabilities and cost competitiveness. <br />
Our corporate policy is based on principles of ethical conduct, compliance with environmental protection laws, occupational safety, and labor protection regulations. We continuously improve our own organization and optimize supply objectives to achieve maximum efficiency in our projects.
                        </div>
                    </div>
                </div>
                <div className="choose_right">
                    <div className="background"></div>
                    <div className="card">
                        <div className="card-content">
                            <h2>Customer Orientation</h2>
                            <p>A customer-oriented approach is what sets us apart from other competing organizations. To better understand our clients’ needs and improve customer satisfaction, our company focuses on specific projects and industries. <br />
Another market advantage of ours is the ability to respond promptly to major problems and other challenges in “online” mode, minimizing bureaucracy. This allows us to quickly address customer requests and find non-standard solutions to even the most complex tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}