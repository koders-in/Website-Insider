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
          //   icon_url: "user.profile_url",
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
        ],
      },
    ],
  };
  return await axios.post(webhook, embed);
};
