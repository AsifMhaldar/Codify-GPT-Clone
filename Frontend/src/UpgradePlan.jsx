import "./UpgradePlan.css";

function UpgradePlan({ onBack }) {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            features: [
                "Basic chat functionality",
                "Standard response speed",
                "Limited message history",
                "Community support"
            ],
            current: true
        },
        {
            name: "Pro",
            price: "$10",
            period: "per month",
            features: [
                "Advanced chat capabilities",
                "Faster response times",
                "Extended message history",
                "Priority support",
                "Custom instructions",
                "File upload support"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$25",
            period: "per month",
            features: [
                "All Pro features",
                "Unlimited messages",
                "Dedicated support",
                "Advanced analytics",
                "API access",
                "Custom integration",
                "Team management"
            ]
        }
    ];

    return (
        <div className="upgradePage">
            <div className="upgradeContainer">
                <div className="upgradeHeader">
                    <div className="headerLeft">
                        <button onClick={onBack} className="backButton">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <h1>Upgrade Plan</h1>
                    </div>
                    <div className="headerRight">
                        <span className="billingInfo">Billed monthly • Cancel anytime</span>
                    </div>
                </div>
                
                <div className="plansGrid">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`planCard ${plan.current ? 'current' : ''} ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && (
                                <div className="planBadge popularBadge">
                                    <i className="fa-solid fa-star"></i>
                                    Most Popular
                                </div>
                            )}
                            {plan.current && (
                                <div className="planBadge currentBadge">
                                    <i className="fa-solid fa-check"></i>
                                    Current Plan
                                </div>
                            )}
                            
                            <div className="planContent">
                                <div className="planHeader">
                                    <h3>{plan.name}</h3>
                                    <div className="priceSection">
                                        <span className="priceAmount">{plan.price}</span>
                                        <span className="pricePeriod">/{plan.period}</span>
                                    </div>
                                </div>
                                
                                <ul className="featuresList">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="featureItem">
                                            <i className="fa-solid fa-check"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button 
                                    className={`planActionBtn ${plan.current ? 'current' : ''} ${plan.popular ? 'popular' : ''}`}
                                    disabled={plan.current}
                                >
                                    {plan.current ? 'Current Plan' : plan.popular ? 'Upgrade to Pro' : 'Get Enterprise'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="featuresComparison">
                    <h2>Compare Plans</h2>
                    <div className="comparisonTable">
                        <div className="tableRow header">
                            <div className="tableCell feature">Feature</div>
                            <div className="tableCell plan">Free</div>
                            <div className="tableCell plan popular">Pro</div>
                            <div className="tableCell plan">Enterprise</div>
                        </div>
                        <div className="tableRow">
                            <div className="tableCell feature">Messages per month</div>
                            <div className="tableCell plan">100</div>
                            <div className="tableCell plan popular">Unlimited</div>
                            <div className="tableCell plan">Unlimited</div>
                        </div>
                        <div className="tableRow">
                            <div className="tableCell feature">Response speed</div>
                            <div className="tableCell plan">Standard</div>
                            <div className="tableCell plan popular">Fast</div>
                            <div className="tableCell plan">Priority</div>
                        </div>
                        <div className="tableRow">
                            <div className="tableCell feature">File uploads</div>
                            <div className="tableCell plan">-</div>
                            <div className="tableCell plan popular">✓</div>
                            <div className="tableCell plan">✓</div>
                        </div>
                        <div className="tableRow">
                            <div className="tableCell feature">API access</div>
                            <div className="tableCell plan">-</div>
                            <div className="tableCell plan popular">-</div>
                            <div className="tableCell plan">✓</div>
                        </div>
                    </div>
                </div>

                <div className="faqSection">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqGrid">
                        <div className="faqCard">
                            <div className="faqIcon">
                                <i className="fa-solid fa-rotate"></i>
                            </div>
                            <h4>Can I change plans anytime?</h4>
                            <p>Yes, upgrade or downgrade anytime. Changes take effect immediately with pro-rated billing.</p>
                        </div>
                        <div className="faqCard">
                            <div className="faqIcon">
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <h4>Is there a free trial?</h4>
                            <p>All paid plans include a 14-day free trial. No credit card required to start exploring.</p>
                        </div>
                        <div className="faqCard">
                            <div className="faqIcon">
                                <i className="fa-solid fa-credit-card"></i>
                            </div>
                            <h4>What payment methods do you accept?</h4>
                            <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
                        </div>
                        <div className="faqCard">
                            <div className="faqIcon">
                                <i className="fa-solid fa-shield"></i>
                            </div>
                            <h4>Can I get a refund?</h4>
                            <p>We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpgradePlan;