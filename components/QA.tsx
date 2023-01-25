import React, { useState } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import {
  AiOutlineBarChart,
  AiFillCheckSquare,
  AiFillCloseSquare,
} from "react-icons/ai";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { motion } from "framer-motion";
const QA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const COLOR = "#324fbf";
  return (
    <article className="space-y-4">
      <section className="">
        <div className="flex items-center justify-between border shadow bg-white px-4 py-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <MdOutlineSecurity size={24} color={COLOR} />
            <p className="font-semibold text-xl">
              Best intrest rates on the market
            </p>
          </div>
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <BsFillArrowDownCircleFill size={24} color={COLOR} />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <BsFillArrowUpCircleFill size={24} color={COLOR} />
            </button>
          )}
        </div>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="px-4 mt-1 shadow p-1 rounded"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugiat temporibus quisquam reprehenderit voluptas minima?
            </p>
          </motion.div>
        )}
      </section>
      <section className="">
        <div className="flex items-center justify-between border shadow px-4 py-4  bg-white p-1 rounded-lg">
          <div className="flex items-center space-x-4">
            <AiFillCloseSquare size={24} color={COLOR} />
            <p className="font-semibold text-xl">Prevent unstable prices</p>
          </div>
          {isOpen1 ? (
            <button onClick={() => setIsOpen1(false)}>
              <BsFillArrowDownCircleFill size={24} color={COLOR} />
            </button>
          ) : (
            <button onClick={() => setIsOpen1(true)}>
              <BsFillArrowUpCircleFill size={24} color={COLOR} />
            </button>
          )}
        </div>
        {isOpen1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="px-4 mt-1 shadow p-1 rounded"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugiat temporibus quisquam reprehenderit voluptas minima?
            </p>
          </motion.div>
        )}
      </section>
      <section className="">
        <div className="flex items-center justify-between px-4 py-4  border shadow bg-white p-1 rounded-lg">
          <div className="flex items-center space-x-4">
            <AiOutlineBarChart size={24} color={COLOR} />
            <p className="font-semibold text-xl">Best price on te market</p>
          </div>
          {isOpen2 ? (
            <button onClick={() => setIsOpen2(false)}>
              <BsFillArrowDownCircleFill size={24} color={COLOR} />
            </button>
          ) : (
            <button onClick={() => setIsOpen2(true)}>
              <BsFillArrowUpCircleFill size={24} color={COLOR} />
            </button>
          )}
        </div>
        {isOpen2 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="px-4 mt-1 shadow p-1 rounded"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugiat temporibus quisquam reprehenderit voluptas minima?
            </p>
          </motion.div>
        )}
      </section>
      <section className="">
        <div className="flex px-4 py-4  items-center justify-between border shadow bg-white p-1 rounded-lg">
          <div className="flex items-center space-x-4">
            <AiFillCheckSquare size={24} color={COLOR} />
            <p className="font-semibold text-xl">Security for your data</p>
          </div>
          {isOpen3 ? (
            <button onClick={() => setIsOpen3(false)}>
              <BsFillArrowDownCircleFill size={24} color={COLOR} />
            </button>
          ) : (
            <button onClick={() => setIsOpen3(true)}>
              <BsFillArrowUpCircleFill size={24} color={COLOR} />
            </button>
          )}
        </div>
        {isOpen3 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="px-4 mt-1 shadow p-1 rounded"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugiat temporibus quisquam reprehenderit voluptas minima?
            </p>
          </motion.div>
        )}
      </section>
    </article>
  );
};

export default QA;
