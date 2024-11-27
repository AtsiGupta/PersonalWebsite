import React from "react";
import EOHImage from "../assets/EOH.png";
import OSImage from "../assets/OS.png";
import ParallelImage from "../assets/Parallel.png";
import HonorsImage from "../assets/Honors.png";

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: EOH Illinois */}
        <a
          href="https://eohillinois.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="card bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <figure className="h-64 overflow-hidden">
            <img
              src={EOHImage}
              alt="Engineering Open House Illinois"
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-xl font-bold uppercase">
              Engineering Open House Illinois
            </h3>
            <p>
              Designed and developed an interactive web platform featuring dynamic
              maps, surveys, and event details for a large-scale university event.
              Improved user engagement by 30%.
            </p>
          </div>
        </a>

        {/* Project 2: Creating an Operating System */}
        <div className="card bg-white shadow-md">
          <figure className="h-64 overflow-hidden">
            <img
              src={OSImage}
              alt="Operating System Project"
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-xl font-bold uppercase">
              Creating an Operating System
            </h3>
            <p>
              Developed an OS from scratch with resource management,
              synchronization, and system calls, utilizing RISC-V assembly.
              Enhanced learning by implementing key components of an operating
              system.
            </p>
          </div>
        </div>

        {/* Project 3: Parallelized CNN Model with CUDA */}
        <div className="card bg-white shadow-md">
          <figure className="h-64 overflow-hidden">
            <img
              src={ParallelImage}
              alt="Parallelized CNN with CUDA"
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-xl font-bold uppercase">
              Parallelized CNN Model with CUDA
            </h3>
            <p>
              Used NVIDIA’s CUDA framework with GPU cluster access to implement a
              convolutional neural network (CNN) model from scratch, achieving a
              1000x speedup over CPU-based computations.
            </p>
          </div>
        </div>

        {/* Project 4: Audio Controlled Voice Box */}
        <a
          href="https://docs.google.com/document/d/1ydDwWlKuvewGlzyjZ-xKedEJufGFDyORWqODYGxYz_4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="card bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <figure className="h-64 overflow-hidden">
            <img
              src={HonorsImage}
              alt="Audio Controlled Voice Box"
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-xl font-bold uppercase">
              Audio Controlled Voice Box
            </h3>
            <p>
              Engineered an audio-controlled device integrating hardware and
              software, with features like a randomized phrase generator and voice
              recognition for hands-free operation.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
