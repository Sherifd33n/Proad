import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../assets/assets";

const MyBlog = () => {
  const { blogId } = useParams();

  const [blogInfo, setBlogInfo] = useState(null);

  const fetchBlogInfo = async () => {
    const blogInfo = blogs.find((blog) => blog._id === blogId);
    setBlogInfo(blogInfo);
  };

  useEffect(() => {
    fetchBlogInfo();
  }, [blogId]);

  return (
    <div className="px-4 pt-[100px] py-[50px] sm:px-[30px] md:px-[80px] lg:px-[200px] xl:px-[250px] bg-[#F5F7FA]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[28px] md:text-[36px] font-bold text-[#1A2B5F] font-montserrat">
            {blogInfo?.title}
          </p>
          <p className="bg-[#FF70A61A] rounded-[30px] text-[12px] font-medium text-[#FF70A6] py-[7px] px-[10px] w-[160px] text-center">
            {blogInfo?.label}
          </p>
        </div>

        <img src={blogInfo?.image} alt="" className="rounded-[12px]" />
      </div>

      <div className="mt-[50px] flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">Introduction</p>
          <p className="text-[16px] font-normal text-[#333333]">
            Effective team collaboration is the backbone of any successful
            project, but it can be challenging—especially for distributed teams.
            Miscommunication, missed deadlines, and lack of visibility can
            derail even the best-laid plans. That’s where PROAD comes in. Our
            project management tool is designed to bring your team together, no
            matter where they are. In this post, we’ll share five practical ways
            to use PROAD to enhance collaboration and keep your projects on
            track.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">
            Centralize Communication with Real-Time Updates
          </p>
          <p className="text-[16px] font-normal text-[#333333]">
            Say goodbye to endless email threads and scattered messages. PROAD’s
            real-time updates let your team see task changes, comments, and
            progress instantly. Whether someone updates a task status or adds a
            comment, everyone stays in the loop. Use this feature to keep
            discussions focused and ensure no detail gets lost.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">
            Assign Tasks with Clear Ownership
          </p>
          <p className="text-[16px] font-normal text-[#333333]">
            Collaboration starts with clarity. With PROAD, you can assign tasks
            to specific team members, set due dates, and add detailed
            descriptions. This ensures everyone knows their responsibilities and
            deadlines, reducing confusion and overlap. Plus, team members can
            tag each other in comments to ask questions or provide updates
            directly within the task.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">
            Use Shared Dashboards for Visibility
          </p>
          <p className="text-[16px] font-normal text-[#333333]">
            Your team likely uses multiple tools, from Slack for communication
            to Google Drive for file storage. PROAD integrates with these tools
            to keep everything in one place. For example, you can attach Google
            Drive files to tasks or get Slack notifications for task updates,
            ensuring your team can collaborate without switching between apps.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">
            Celebrate Wins with Milestones
          </p>
          <p className="text-[16px] font-normal text-[#333333]">
            Collaboration isn’t just about work—it’s also about morale. PROAD
            lets you set project milestones to mark key achievements, like
            completing a project phase or hitting a deadline. Celebrate these
            wins with your team to boost motivation and strengthen your
            collaborative spirit.
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[22px] font-bold text-[#1A2B5F]">Conclusion</p>
          <p className="text-[16px] font-normal text-[#333333]">
            Collaboration doesn’t have to be complicated. With PROAD, you can
            streamline communication, clarify responsibilities, and keep your
            team aligned—all in one platform. Ready to take your team’s
            collaboration to the next level? Start your free trial today and see
            the difference PROAD can make.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
