import axios from "axios";

const webhook =
  "https://discord.com/api/webhooks/1039098302643318854/dyTePnjCM6LRZ8SriL-AgCBZRe9qh70Eg7VaIF6pDKtMi3F0ohxtlHm5PnADIW7ORRwi";

export const sendCandidateDetails = async (data) => {
  const embed = {
    embeds: [
      {
        title: "Download resume",
        description: `${data.fName} is apply for job`,
        url: data?.downloadLink,
        color: 3447003,
        author: {
          name: data?.fName,
        },
        fields: [
          {
            name: "First Name",
            value: data?.fName,
            inline: true,
          },
          {
            name: "Last Name",
            value: data?.lName,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mobile,
            inline: true,
          },
          {
            name: "Website URL/Portfolio URL",
            value: data?.portfolioURL || "Not provided",
            inline: true,
          },
          {
            name: "LinkedIn URL",
            value: data?.linkedIn || "Not provided",
            inline: true,
          },
          {
            name: "Why should you be hired for this role?",
            value: data?.hiringReason,
            inline: false,
          },
          {
            name: "Why do you want to Work at Koders?",
            value: data?.joiningReason,
            inline: false,
          },
          {
            name: "When can you start working?",
            value: data?.joiningIn,
            inline: false,
          },
          {
            name: "Where did you learn of this opening?",
            value: data?.hearAboutUs,
            inline: false,
          },
        ],
      },
    ],
  };
  return await axios.post(webhook, embed);
};

export const sendClientDetails = async (data: any) => {
  const embed = {
    embeds: [
      {
        title: "Client request",
        description: `${data.fName} is requested for project`,
        color: 3447003,
        author: {
          name: data?.fName,
        },
        fields: [
          {
            name: "First Name",
            value: data?.fName,
            inline: true,
          },
          {
            name: "Last Name",
            value: data?.lName,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mobile,
            inline: true,
          },
          {
            name: "Company",
            value: data?.company || "None",
            inline: true,
          },
          {
            name: "Role",
            value: data?.role || "None",
            inline: true,
          },
          {
            name: "Technologies",
            value: data?.technologies.toString(),
            inline: true,
          },
        ],
      },
    ],
  };
  return await axios.post(webhook, embed);
};

export const sendCollaboratorDetails = async (data: any) => {
  const embed = {
    embeds: [
      {
        title: "Collaboration request",
        description: `${data?.name} wants to collaborate with us.`,
        // url: data?.downloadLink,
        color: 3447003,
        author: {
          name: data?.fName,
          //   icon_url: "user.profile_url",
        },
        fields: [
          {
            name: "Name",
            value: data?.name,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mobile,
            inline: true,
          },
          {
            name: "Company",
            value: data?.company || "None",
            inline: true,
          },
          {
            name: "Company Size",
            value: data?.companySize || "None",
            inline: true,
          },
          {
            name: "Location",
            value: data?.location,
            inline: true,
          },
          {
            name: "Website URL",
            value: data?.websiteURL,
            inline: true,
          },
          {
            name: "Job Title",
            value: data?.jobTitle,
            inline: true,
          },
          {
            name: "Hear about us",
            value: data?.hearAboutUS,
            inline: true,
          },
          {
            name: "Seeks benefit",
            value: data?.jobTitle,
            inline: false,
          },
          {
            name: "Collaboration will bring to us",
            value: data?.questionTwo,
            inline: false,
          },
        ],
      },
    ],
  };
  return await axios.post(webhook, embed);
};
