import Aos from "aos";
import React, { useState,useEffect } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import { sscMtsData, sscMtsExamData } from "../../data/ssc-mts";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import Card from "../../components/card/Card";
const SSCMTS = () => {
  const { title, intro, content, officialWebsite } = sscMtsData;
  const {
    about,
    notification,
    sscMtsHighlightsData,
    sscMtsImportantDatesData,
    sscMtsApplicationFormData,
    sscMtsEligibilityCriteriaData,
    sscMtsSelectionProcessData,
    sscMtsExamCentersData,
  } = sscMtsExamData;
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      Aos.init({
        duration: 1000,
      });
    }, []);
    const handleBuyNowClick = (link) => {
      window.location.replace(`${link}`);
    };
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC CPO - The WiNNERS Institute"
        canonicalLink="/ssc-cgl"
      />
      <div className="container mx-auto max-w-[1166px] mx-auto lg:px-6 sm:px-0 py-4 mt-[82px] relative">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-red-600 hover:underline">
                Home
              </a>
              <span className="text-gray-400">&nbsp;&nbsp;»&nbsp;&nbsp;</span>
            </li>
            <li>
              <span className="text-gray-500">Ssc-mts</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Column */}
          <div className="md:col-span-9 ">
            {/* First Section: SSC CPO Intro */}
            <div className="bg-white  rounded-md lg:p-6 mb-6">
              <h1 className="xl:text-3xl lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {title}
              </h1>
              <p className="text-gray-600 mb-4">
                {intro}{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialWebsite}
                </a>
              </p>
              <div className="bg-gray-50 p-4 rounded-md border">
                <p className="text-gray-700 leading-relaxed">{content}</p>
              </div>
            </div>
            {/*About SSC MTS Exam */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>
            {/* /* SSC MTS Notification Section */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {notification.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                SSC has recently released the{" "}
                <a
                  href={notification.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSC Calendar 2025-26
                </a>{" "}
                which mentions the registration and exam dates for upcoming SSC
                exams. As per the calendar, the SSC MTS 2025 Notification will
                be released on <strong>26th June 2025</strong>, and the
                application forms will be available until{" "}
                <strong>25th July 2025</strong>. The detailed notification will
                be available in PDF format on the official website at{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialWebsite}
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                The SSC MTS Notification will contain all recruitment details,
                including eligibility, selection process, syllabus, and salary
                structure. Check back here for the PDF link once it is released.
              </p>
            </div>
            {/* SSC MTS 2025 - Highlights */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsHighlightsData?.title || "SSC MTS Highlights"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsHighlightsData?.description ||
                  "No description available."}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Highlights
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsHighlightsData?.tableData?.length > 0 ? (
                      sscMtsHighlightsData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.label || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.value || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC MTS Recruitment 2025 - Important Dates */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsImportantDatesData?.title || "Important Dates"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsImportantDatesData?.description ||
                  "No description available."}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Events
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Dates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsImportantDatesData?.tableData?.length > 0 ? (
                      sscMtsImportantDatesData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.event || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.date || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC MTS 2025 Application Form */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsApplicationFormData?.title || "Application Form"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscMtsApplicationFormData?.description ||
                  "No description available."}
              </p>
            </div>
            {/* SSC MTS 2025 Eligibility Criteria */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsEligibilityCriteriaData?.title || "Eligibility Criteria"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsEligibilityCriteriaData?.description ||
                  "No description available."}
              </p>

              {/* Sections */}
              {sscMtsEligibilityCriteriaData?.sections?.map(
                (section, index) => (
                  <div key={index} className="mb-6">
                    {/* Subsection Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {section?.title || "Section"}
                    </h3>
                    {/* Points */}
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                      {section?.points?.map((point, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: point }} // Supports HTML for bold and indentation
                        ></li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
            {/* SSC MTS 2025 Selection Process */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsSelectionProcessData?.title || "Selection Process"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsSelectionProcessData?.description ||
                  "No description available."}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Stage
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsSelectionProcessData?.tableData?.length > 0 ? (
                      sscMtsSelectionProcessData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.stage || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.details || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC MTS 2025 Exam Centers */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsExamCentersData?.title || "Exam Centers"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsExamCentersData?.description ||
                  "No description available."}
              </p>

              {/* Exam Centers Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscMtsExamCentersData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-left font-semibold text-gray-700 border border-gray-300"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsExamCentersData?.tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.region || "N/A"}
                        </td>
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.states || "N/A"}
                        </td>
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.cityCodes || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Related Posts Table */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscMtsExamCentersData?.relatedPosts?.title || "Related Posts"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscMtsExamCentersData?.relatedPosts?.tableData.map(
                      (row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-300">
                          {row.map((item, colIndex) => (
                            <td
                              key={colIndex}
                              className="px-4 py-3 text-center text-gray-700 border border-gray-300"
                            >
                              {item.text}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>{" "}
            {/* Frequently Asked Questions Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscMtsExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscMtsExamData.faq.questions.map((faq, index) => (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left focus:outline-none hover:no-underline"
                      style={{ textDecoration: "none" }} // Prevent underline explicitly
                    >
                      <span
                        className="font-semibold text-gray-700 hover:no-underline"
                        style={{ textDecoration: "none" }} // Ensure text has no underline
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`ml-2 transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === index && (
                      <p
                        className="mt-2 text-gray-600 leading-relaxed hover:no-underline"
                        style={{ textDecoration: "none" }} // Prevent underline on paragraph
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Popular Online Live Classes */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Popular Online Live Classes
              </h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {classes?.map((cls, index) => (
                  <Card
                    key={index}
                    image={cls.image}
                    description={cls.description}
                    price={cls.price}
                    buttonText={cls.button}
                    onButtonClick={() => handleBuyNowClick(cls?.link)}
                  />
                ))}
              </div>
            </div>
            {/* Popular Mock Test Series */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Popular Mock Test Series
              </h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {testSeries?.map((cls, index) => (
                  <Card
                    key={index}
                    image={cls.image}
                    description={cls.description}
                    price={cls.price}
                    buttonText={cls.button}
                    onButtonClick={() => handleBuyNowClick(cls?.link)}
                  />
                ))}
              </div>
            </div>
            {/* Popular Books */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Popular Books</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {sscbooksdata?.map((book, index) => (
                  <Card
                    key={index}
                    image={book.image}
                    description={book.description}
                    price={book.price}
                    buttonText={book.button}
                    onButtonClick={() => handleBuyNowClick(book?.link)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Col-4 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <img
              src="/ssc-cgl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/mVyOXuo89M4"
              title="SSC Calendar 2025-26 | SSC Exam Calendar 2025 Out | SSC Exams 2025-26 | Aditya Patel Sir"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/KDtJdvmB26U"
              title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB | What is SSC GD ?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <img
              src="/ssc-combo-books.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SSCMTS;
