export const HeroPage = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Free Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% Free Forever — No Credit Card Required
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Manage Your Real Estate Portfolio with Ease
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
                            Keep track of your properties, tenants, and managers in one place. 
                            Securely store insurance and contract documents, and never miss a contract end date.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Unlimited Properties
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Unlimited Tenants
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Secure Document Storage
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Dashboard Preview */}
                    <div className="flex-1 relative">
                        <div className="relative">
                            {/* Laptop Frame */}
                            <div className="bg-gray-800 rounded-t-xl p-2 pt-6 shadow-2xl">
                                <div className="bg-gray-100 rounded-lg overflow-hidden">
                                    {/* Mock Dashboard - Property Portfolio */}
                                    <div className="p-4 text-sm">
                                        <div className="bg-white rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between items-start mb-1">
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Property Portfolio Summary</h4>
                                                    <p className="text-xs text-gray-500">updated Tuesday 20 January at 18:05</p>
                                                </div>
                                                <button className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg">+ Add Property</button>
                                            </div>
                                            
                                            {/* Table Header */}
                                            <div className="grid grid-cols-5 gap-2 text-xs text-gray-500 uppercase mt-4 mb-2 px-2">
                                                <span>Property</span>
                                                <span className="text-center">Rent</span>
                                                <span className="text-center">Mortgage</span>
                                                <span className="text-center">Insurance</span>
                                                <span className="text-center">Contract</span>
                                            </div>
                                            
                                            {/* Table Rows */}
                                            <div className="space-y-2">
                                                <div className="grid grid-cols-5 gap-2 text-xs items-center px-2 py-2 border-t">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">El Prat Gallart i Mones</p>
                                                        <p className="text-gray-500 text-xs">Carrer d'Enric Morera 71 D</p>
                                                    </div>
                                                    <span className="text-center">$900</span>
                                                    <span className="text-center">$600</span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                        View
                                                    </span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                        View
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-5 gap-2 text-xs items-center px-2 py-2 border-t">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Sabadell</p>
                                                        <p className="text-gray-500 text-xs">Carrer fierro del carmen</p>
                                                    </div>
                                                    <span className="text-center">$700</span>
                                                    <span className="text-center">$300</span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                        View
                                                    </span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                        View
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-5 gap-2 text-xs items-center px-2 py-2 border-t">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Sagrada Familia</p>
                                                        <p className="text-gray-500 text-xs">Calle del Machupichu 79</p>
                                                    </div>
                                                    <span className="text-center">$1,200</span>
                                                    <span className="text-center">$750</span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                        View
                                                    </span>
                                                    <span className="text-center text-blue-600 flex items-center justify-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                                        Upload
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Laptop Base */}
                            <div className="bg-gray-700 h-4 rounded-b-lg mx-8"></div>
                            <div className="bg-gray-600 h-2 rounded-b-xl mx-16"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Detailed */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">All Features Included Free</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Everything You Need to Manage Your Properties
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A simple yet powerful tool designed for landlords and property owners. 
                            No hidden fees, no premium tiers — every feature is yours from day one.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Property Management */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Property Portfolio</h3>
                            <p className="text-gray-600 mb-4">
                                Store all your property information in one organized dashboard.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Save property name and full address
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Record rent and mortgage amounts
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Upload insurance documents per property
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Store property contracts securely
                                </li>
                            </ul>
                        </div>

                        {/* Tenant Management */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Tenant Tracking</h3>
                            <p className="text-gray-600 mb-4">
                                Keep all tenant information organized and track contract dates.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Link tenants to specific properties
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Store name, email, and phone number
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Track contract end dates
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Never miss a lease renewal
                                </li>
                            </ul>
                        </div>

                        {/* Manager Tracking */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Property Managers</h3>
                            <p className="text-gray-600 mb-4">
                                Keep your property managers' information at your fingertips.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Save manager name and title
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Store company information
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Keep email and phone handy
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Quick access to all contacts
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tenant Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Tenant Management</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Track Your Tenants & Contract Dates
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Add tenants to your properties and keep all their contact information in one place. 
                                Most importantly, track when each contract ends so you're always prepared for renewals.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Complete Contact Info</h4>
                                        <p className="text-gray-600 text-sm">Store tenant name, email, and phone number for easy communication</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Contract End Date Tracking</h4>
                                        <p className="text-gray-600 text-sm">Never be caught off guard — see exactly when each lease expires</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Property Association</h4>
                                        <p className="text-gray-600 text-sm">Link each tenant to their specific property for easy organization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Visual - Tenants Table */}
                        <div className="bg-gray-100 rounded-2xl p-6">
                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-gray-900">Tenants</h4>
                                    <span className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg">+ Add Tenant</span>
                                </div>
                                
                                {/* Table Header */}
                                <div className="grid grid-cols-5 gap-3 text-xs text-gray-500 uppercase mb-3 px-2">
                                    <span>Property</span>
                                    <span>Name</span>
                                    <span>Email</span>
                                    <span>Phone</span>
                                    <span className="text-center">End of Contract</span>
                                </div>
                                
                                {/* Table Rows */}
                                <div className="space-y-2">
                                    <div className="grid grid-cols-5 gap-3 text-sm items-center px-2 py-3 bg-gray-50 rounded-lg">
                                        <span className="font-medium text-gray-900">El Prat Gallart i Mones</span>
                                        <span className="text-blue-600">Alex Besse Donato</span>
                                        <span className="text-gray-600 text-xs">alexbesse@gmail.com</span>
                                        <span className="text-gray-600">618157029</span>
                                        <span className="text-center font-medium">2026-01-02</span>
                                    </div>
                                    <div className="grid grid-cols-5 gap-3 text-sm items-center px-2 py-3 bg-gray-50 rounded-lg">
                                        <span className="font-medium text-gray-900">Sabadell</span>
                                        <span className="text-blue-600">Sergio Gomez</span>
                                        <span className="text-gray-600 text-xs">andrea@gmail.com</span>
                                        <span className="text-gray-600">66666666</span>
                                        <span className="text-center font-medium">2026-01-08</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manager Section */}
            <section className="bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual - Managers Table */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <div className="bg-white rounded-xl shadow-sm p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-gray-900">Property Managers</h4>
                                        <span className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg">+ Add Manager</span>
                                    </div>
                                    
                                    {/* Table Header */}
                                    <div className="grid grid-cols-4 gap-3 text-xs text-gray-500 uppercase mb-3 px-2">
                                        <span>Name</span>
                                        <span>Company</span>
                                        <span>Email</span>
                                        <span>Phone</span>
                                    </div>
                                    
                                    {/* Table Row */}
                                    <div className="grid grid-cols-4 gap-3 text-sm items-center px-2 py-3 border-t">
                                        <div>
                                            <p className="font-semibold text-gray-900">Carlos Gomez</p>
                                            <p className="text-blue-600 text-xs">Manager</p>
                                        </div>
                                        <span className="text-gray-600">Gestoria Gomez</span>
                                        <span className="text-gray-600 text-xs">carlosgomez@gmail.com</span>
                                        <span className="text-gray-600">646628255</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">Property Managers</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                                Keep Your Managers' Info Organized
                            </h2>
                            <p className="text-gray-400 mb-8">
                                If you work with property managers or management companies, keep all their 
                                contact information in one easily accessible place.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Store manager name and title
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Save company name for reference
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Quick access to email and phone
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Storage Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Secure Documents</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Store Insurance & Contracts Securely
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Upload your property insurance documents and contracts directly to each property. 
                                Access them anytime from anywhere — no more searching through email or filing cabinets.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Insurance Documents</h4>
                                        <p className="text-gray-600 text-sm">Upload and view insurance policies for each property</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Property Contracts</h4>
                                        <p className="text-gray-600 text-sm">Store purchase agreements, deeds, and other important documents</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">View Anytime</h4>
                                        <p className="text-gray-600 text-sm">Access your documents instantly with one click</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Visual */}
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                                <h4 className="font-bold text-gray-900 mb-4">Property Documents</h4>
                                
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">El Prat Insurance.pdf</p>
                                            <p className="text-sm text-gray-500">Insurance Document</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View
                                    </button>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Sabadell Contract.pdf</p>
                                            <p className="text-sm text-gray-500">Property Contract</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View
                                    </button>
                                </div>
                                
                                <div className="flex items-center justify-between p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-500">Sagrada Familia Contract</p>
                                            <p className="text-sm text-gray-400">No file uploaded</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-12">
                        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Completely Free — No Strings Attached
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Organize Your Properties?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join landlords and property owners who manage their real estate with ease. 
                            Create your free account using the Sign Up button above — it only takes a few seconds.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                No hidden fees ever
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                All features included
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>Real Estate Pro — Free property management for everyone.</p>
                </div>
            </footer>
        </div>
    );
};
