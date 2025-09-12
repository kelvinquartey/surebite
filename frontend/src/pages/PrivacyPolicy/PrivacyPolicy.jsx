import {useState, useEffect} from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    const [activeTab, setActiveTab] = useState("terms");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    <div className='privacy-policy'>
        <h1>SureBite Legal Information</h1>

        <div className="legal-tabs">
            <button
            className={activeTab === "terms" ? "active" : ""}
            onClick={() => setActiveTab("terms")}
            >
            Terms of Use
            </button>
            <button
            className={activeTab === "privacy" ? "active" : ""}
            onClick={() => setActiveTab("privacy")}
            >
            Privacy Policy
            </button>
        </div>
        
        {activeTab === "privacy" && (
        <article className="legal-page">
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> [12th September, 2025]</p>

            <section>
                <h2>1. Information We Collect</h2>
                <ul>
                <li><strong>Personal Information:</strong> Name, phone number, delivery address, and payment details when you place an order.</li>
                <li><strong>Usage Data:</strong> How you interact with our website and services.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and cookies.</li>
                </ul>
            </section>

            <section>
                <h2>2. How We Use Your Information</h2>
                <ul>
                <li>To process and deliver your food orders.</li>
                <li>To improve our services and customer experience.</li>
                <li>To contact you about orders, deliveries, or support requests.</li>
                <li>To handle refunds, complaints, and cancellation requests in line with our Terms of Use.</li>
                </ul>
            </section>

            <section>
                <h2>3. Sharing of Information</h2>
                <p>SureBite does not sell or rent your personal data. Information may be shared only with:</p>
                <ul>
                <li>Our in-house couriers to deliver your order.</li>
                <li>Payment providers to process transactions securely.</li>
                <li>When required by law or legal authorities.</li>
                </ul>
            </section>

            <section>
                <h2>4. Refund & Cancellation Requests</h2>
                <p>
                If you request a refund or report an issue with your order, we may need
                to collect and temporarily store details about your complaint, such as
                order information, delivery details, and communications with our support
                team. This information is used only to verify your request and resolve
                the issue in accordance with our Terms of Use.
                </p>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>We use industry-standard measures to protect your data, including secure payment gateways and encrypted communications.</p>
            </section>

            <section>
                <h2>6. Your Rights</h2>
                <p>You have the right to request access, correction, or deletion of your data. To make a request, contact us at <a href="mailto:support@surebite.com">support@surebite.com</a>.</p>
            </section>

            <section>
                <h2>7. Changes to this Policy</h2>
                <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>
            </section>

            <section>
                <h2>8. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please email us at <a href="mailto:support@surebite.com">support@surebite.com</a>.</p>
            </section>
        </article>
        )}

        {activeTab === "terms" && (
        <article className="legal-page">      
            <h1>Terms of Use</h1>
            <p><strong>Effective Date:</strong> [12th September, 2025]</p>

            <section>
                <h2>1. Eligibility</h2>
                <p>You must be at least 18 years old (or the legal age in your country) to place an order on SureBite.</p>
            </section>

            <section>
                <h2>2. Ordering & Payments</h2>
                <p>All orders placed through SureBite are for food prepared and delivered directly by SureBite Restaurant. Prices, delivery fees, and service charges are displayed at checkout. Once an order is confirmed, it cannot be canceled or refunded except at our discretion.</p>
            </section>

            <section>
                <h2>3. Delivery</h2>
                <p>Deliveries are fulfilled only by SureBite's in-house couriers. Delivery times are estimates and may vary depending on order volume, traffic, and weather. Customers must provide accurate delivery addresses to ensure successful delivery.</p>
            </section>

            <section>
                <h2>4. Food Quality & Allergies</h2>
                <p>SureBite takes full responsibility for the preparation, quality, and safety of its food. However, customers are responsible for reviewing ingredients and notifying us of allergies before ordering. We cannot guarantee that food is allergen-free.</p>
            </section>

            <section>
                <h2>5. User Conduct</h2>
                <p>You agree not to misuse the platform, create fraudulent orders, or provide false delivery details. Misuse may result in refusal of service.</p>
            </section>

            <section>
                <h2>6. Intellectual Property</h2>
                <p>All SureBite logos, menus, designs, and platform content are owned by SureBite Restaurant and may not be copied or redistributed without permission.</p>
            </section>

            <section>
                <h2>7. Limitation of Liability</h2>
                <p>While SureBite strives to deliver all orders promptly and accurately, we are not liable for delays caused by unforeseen circumstances such as traffic, weather, or emergencies.</p>
            </section>

            <section>
                <h2>8. Changes to Terms</h2>
                <p>We may update these Terms at any time. Continued use of SureBite services indicates acceptance of any changes.</p>
            </section>

            <section>
                <h2>9. Refund & Cancellation Policy</h2>
                <ul>
                <li><strong>Order Cancellation:</strong> Once an order is confirmed, it cannot be canceled. However, if you contact us immediately after placing the order, we may, at our discretion, allow cancellation if food preparation has not yet begun.</li>
                <li><strong>Wrong or Missing Items:</strong> If you receive the wrong order or if items are missing, please contact SureBite immediately. We will either redeliver the missing items or issue a partial/full refund.</li>
                <li><strong>Quality Issues:</strong> If you believe the food delivered is unsafe or not up to our quality standards, contact us within 24 hours. Refunds or replacements will be handled on a case-by-case basis.</li>
                <li><strong>Late Deliveries:</strong> Delivery times are estimates and not guaranteed. Refunds for late orders will only be issued if the delay was unreasonable and caused solely by SureBite.</li>
                <li><strong>No Refunds:</strong> Refunds will not be issued for orders where the customer provided incorrect delivery details, failed to answer calls, or was unavailable to receive the order.</li>
                </ul>
            </section>

            <section>
                <h2>10. Contact Us</h2>
                <p>For questions, please email us at <a href="mailto:support@surebite.com">support@surebite.com</a></p>
            </section>
        </article>)}
    </div>
    )
}


// const PrivacyPolicy = () => {
//   const [activeTab, setActiveTab] = useState("terms");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="legal-page">
//       <h1>SureBite Legal Information</h1>

//       {/* Tab navigation */}
//       <div className="legal-tabs">
//         <button
//           className={activeTab === "terms" ? "active" : ""}
//           onClick={() => setActiveTab("terms")}
//         >
//           Terms of Use
//         </button>
//         <button
//           className={activeTab === "privacy" ? "active" : ""}
//           onClick={() => setActiveTab("privacy")}
//         >
//           Privacy Policy
//         </button>
//       </div>

//       {/* Terms of Use Section */}
//       {activeTab === "terms" && (
//         <div className="legal-section">
//           <h2>Terms of Use</h2>
//           <p><strong>Effective Date:</strong> [Insert Date]</p>

//           <section>
//             <h3>1. Acceptance of Terms</h3>
//             <p>
//               By using SureBite’s services, you agree to these Terms of Use. 
//               Our services are limited to food ordering and delivery from SureBite restaurant only.
//             </p>
//           </section>

//           <section>
//             <h3>2. Orders & Delivery</h3>
//             <p>
//               Orders can only be placed for items listed on our platform. Delivery 
//               is carried out exclusively by SureBite couriers to the address you provide.
//             </p>
//           </section>

//           <section>
//             <h3>3. Pricing & Payment</h3>
//             <p>
//               Prices include applicable taxes and fees. Payments are processed 
//               securely through authorized gateways. SureBite does not store payment details.
//             </p>
//           </section>

//           <section>
//             <h3>4. Refunds & Cancellations</h3>
//             <p>
//               Refunds may be granted in cases such as incorrect or missing items, or 
//               failure to deliver. Cancellations must be made before food preparation begins. 
//               All requests are subject to review by SureBite.
//             </p>
//           </section>

//           <section>
//             <h3>5. Liability</h3>
//             <p>
//               SureBite is not responsible for delays caused by factors beyond our control 
//               (traffic, weather, emergencies). Liability is limited to the value of your order.
//             </p>
//           </section>
//         </div>
//       )}

//       {/* Privacy Policy Section */}
//       {activeTab === "privacy" && (
//         <div className="legal-section">
//           <h2>Privacy Policy</h2>
//           <p><strong>Effective Date:</strong> [Insert Date]</p>

//           <section>
//             <h3>1. Information We Collect</h3>
//             <ul>
//               <li><strong>Personal Information:</strong> Name, phone, address, payment details.</li>
//               <li><strong>Usage Data:</strong> Interactions with our platform.</li>
//               <li><strong>Device Data:</strong> Browser type, IP address, cookies.</li>
//             </ul>
//           </section>

//           <section>
//             <h3>2. How We Use Your Data</h3>
//             <ul>
//               <li>To process and deliver your food orders.</li>
//               <li>To contact you about your order or support requests.</li>
//               <li>To handle refunds, complaints, and cancellations per our Terms of Use.</li>
//               <li>To improve customer experience and service efficiency.</li>
//             </ul>
//           </section>

//           <section>
//             <h3>3. Refund & Complaint Handling</h3>
//             <p>
//               If you request a refund or raise an issue, we may collect details about your 
//               order, delivery, and complaint. This data is used only to resolve your request 
//               and will not be shared outside SureBite unless legally required.
//             </p>
//           </section>

//           <section>
//             <h3>4. Data Security</h3>
//             <p>
//               We use encryption and secure gateways to protect your information. 
//               Payment details are never stored by SureBite.
//             </p>
//           </section>

//           <section>
//             <h3>5. Your Rights</h3>
//             <p>
//               You may request access, correction, or deletion of your data by contacting us 
//               at <a href="mailto:support@surebite.com">support@surebite.com</a>.
//             </p>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };




export default PrivacyPolicy