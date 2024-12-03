import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div
      id="faqs"
      className="text-5xl text-black w-[100vw] flex flex-col items-center justify-center gap-[50px] py-28"
    >
      <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-white text-sm text-light flex items-center justify-center p-2 w-[68px]">
        <div>FAQs</div>
      </div>
      <div className="darker text-center">Have any Questions?</div>
      <div className="text-base font-light">Find the answers here.</div>
      <div className="flex flex-col items-center gap-2">
        <FaqCard
          question="What is Web3 and how can it benefit my business?"
          answer="
        Web3 refers to the next generation of the internet, utilizing
        decentralized technologies like blockchain to create a more secure,
        transparent, and user-centric web. By integrating Web3 solutions, your
        business can enhance security, reduce costs, and open up new revenue
        streams through innovative technologies like smart contracts and NFTs."
        />
        <FaqCard
          question="How do you ensure the security of your blockchain solutions?"
          answer="Security is our top priority. We conduct comprehensive security audits and follow industry best practices to ensure the integrity and reliability of our blockchain solutions. Our team stays updated on the latest security protocols to protect your business from potential threats."
        />
        <FaqCard
          question="What industries can benefit from Web3 technologies?"
          answer="
        Web3 technologies can benefit a wide range of industries, including finance, healthcare, supply chain, real estate, and more. Any industry that values transparency, security, and efficiency can leverage the power of decentralized technologies to improve their operations and services."
        />
        <FaqCard
          question="How long does it take to see results from your Web3 consulting services?"
          answer="The timeline for results varies depending on the complexity and scope of your project. Typically, clients start seeing initial benefits within the first few months, with more significant impacts becoming evident as the solutions are fully implemented and integrated into your business processes.er"
        />
        <FaqCard
          question="Do you offer ongoing support after the implementation of Web3 solutions?"
          answer="Do you offer ongoing support after the implementation of Web3 solutions?"
        />
      </div>
    </div>
  );
};

export default Faq;
