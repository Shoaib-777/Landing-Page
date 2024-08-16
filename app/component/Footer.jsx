import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 pt-8 lg:pt-16">
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="space-y-4 xl:col-span-1">
          <div>
            <Link className="inline-block text-xl font-bold text-white" href="/">
              Xplainerr
            </Link>
          </div>
          <p className="text-sm text-[#A3A9B9]">
            We provide niche up-skilling courses to help you accelerate and succeed in your career
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-3 xl:mt-0">
          <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                Practice
              </h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <span className="text-sm font-normal">
                    <Link className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]" href="/">
                      Get Started
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-sm font-normal">
                    <Link className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]" href="/">
                      Product Management
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-sm font-normal">
                    <Link className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]" href="/">
                      Cohorts
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-sm font-normal">
                    <Link
                      className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                      href="/"
                    >
                      Pm Interviews
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                  Courses
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        API for Product Manager
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Pricing &amp; Monetization
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        UX Writing 101
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
            <div>
              <div className="flex flex-col gap-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                  Trending Blogs
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        One year journey as PM
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        10 D2C metrics to track
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        UX Writing for PMs
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/blog/so-you-want-to-be-product-manager"
                      >
                        So you want to be a PM?
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                  Company
                </h3>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Terms of service
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Contact Us
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Privacy &amp; policy
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/cancellation"
                      >
                        Cancellations
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Appjunction
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="text-sm font-normal">
                      <Link
                        className="text-[#A3A9B9] transition-colors hover:text-[rgb(30,66,159)]"
                        href="/"
                      >
                        Sitemap
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 mt-2 border-t border-gray-700 pb-1 pt-4 md:mb-0 md:pt-8">
        <p className="text-center text-base text-[#94A3B8]">
          © 2024 Xplainerr&#44; All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )}

export default Footer