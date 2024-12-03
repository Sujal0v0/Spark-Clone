import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="text-5xl text-black py-32 flex flex-col items-center justify-center gap-[50px] overflow-x-hidden"
    >
      <div className="rounded-full border-buttonBorder border-[1px] border-solid bg-white text-sm text-light flex items-center justify-center p-2 w-[110px]">
        <div>Testimonials</div>
      </div>
      <div className="darker text-center">What our Clients Say</div>
      <div className="text-base font-light">
        Real feedback from companies we&apos;ve helped grow.
      </div>
      <div className="fade">
        <div className="flex gap-6 p-5">
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
          <TestimonialsCard
            comment="Spark's blockchain solutions transformed our supply chain
          efficiency. Their expertise is truly unmatched."
            name="John Smith"
            company="Beta Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
