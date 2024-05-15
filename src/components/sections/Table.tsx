"use client";
import React, { useRef } from "react";
import Button from "../shared/Button";
import { useScroll, useTransform, motion } from "framer-motion";

const tableHeaders = [
  { label: "", value: "change" },

  { label: "#", value: "number" },
  { label: "Model Name", value: "name", className: "w-[40%]" },
  { label: "Average", value: "average" },
  { label: "ARC", value: "arc" },
  { label: "HellaSwag", value: "hellaSwag" },
  {
    label: "MMLU",
    value: "mmlu",
  },
  { label: "TruthfulQA", value: "truthfulQA" },
  { label: "Winogrande", value: "winogrande" },
  {
    label: "GSM8K",
    value: "gsm8k",
  },
  {
    label: "Earnings",
    value: "earnings",
  },
];

const tableData = [
  {
    change: "none",
    number: 1,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "up",
    number: 2,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "down",
    number: 3,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "none",
    number: 4,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "up",
    number: 5,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "up",
    number: 6,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "down",
    number: 7,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "none",
    number: 8,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "down",
    number: 9,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
  {
    change: "none",
    number: 10,
    name: "Model_Name123",
    average: 81.22,
    arc: 81.22,
    hellaSwag: 81.22,
    mmlu: 81.22,
    truthfulQA: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
  },
];

const dataKeys = [
  "number",
  "name",
  "average",
  "arc",
  "hellaSwag",
  "mmlu",
  "truthfulQA",
  "winogrande",
  "gsm8k",
  "earnings",
];

const Table = () => {
  const element = useRef(null);
  const rocket = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.4"],
  });
  const { scrollYProgress: scrollRocket } = useScroll({
    target: element,
    offset: ["start 0.2", "end 0.7"],
  });
  const top = useTransform(scrollRocket, [0, 1], ["100%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <div className="px-20 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-5xl leading-[59px] font-clashGrotesk">
          LLM Leaderboard
        </h2>
        <Button size="lg" className="text-xl leading-6">
          Submit your model
        </Button>
      </div>
      <p className="text-white text-xl leading-8 font-inter">
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>

      <motion.table
        ref={element}
        style={{ rotateX: rotate, scale }}
        className="table"
      >
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className={`text-white text-xl leading-6 ${header.className}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
          {tableData.map((row, index) => (
            <tr className="table__row" key={index}>
              <td className="table__cell">
                {row.change === "up" ? (
                  <img src="/assets/img/up.svg" alt="up" />
                ) : row.change === "down" ? (
                  <img src="/assets/img/down.svg" alt="down" />
                ) : (
                  <img
                    src="/assets/img/same.svg"
                    className="translate-x-[4px]"
                    alt="same"
                  />
                )}
              </td>

              {dataKeys.map((key) => (
                <td className="text-white text-xl leading-6" key={key}>
                  {row[key as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </thead>
      </motion.table>
      <motion.img
        src="/rocket.svg"
        style={{ top }}
        ref={rocket}
        className="width-[226px] text-center absolute  right-[0.3rem] left-[15%] "
      ></motion.img>
    </div>
  );
};

export default Table;
