import axios from "axios";

const webhook =
  "https://discord.com/api/webhooks/1039098302643318854/dyTePnjCM6LRZ8SriL-AgCBZRe9qh70Eg7VaIF6pDKtMi3F0ohxtlHm5PnADIW7ORRwi";

export const sendCandidateDetails = async (data) => {
  const embed = {
    embeds: [
      {
        title: "Apply for Job",
        // description: "title" + "\t\t\t\t\t" + "content",
        url: data?.downloadLink,
        // color: "0x0099ff",
        // footer: "Apply for job",
        // thumbnail: "THUMBNAIL",
        author: {
          name: data?.fname?.value,
          //   url: " user.tweet_link",
          //   icon_url: "user.profile_url",
        },
        fields: [
          {
            name: "First Name",
            value: data?.fname.value,
            inline: true,
          },
          {
            name: "Last Name",
            value: data?.lname.value,
            inline: true,
          },
          {
            name: "Email",
            value: data?.email.value,
            inline: true,
          },
          {
            name: "Mobile Number",
            value: data?.mob.value,
            inline: true,
          },
        ],
      },
    ],
  };
  console.log("first");
  const res = await axios.post(webhook, embed);
  console.log(res);
  return res;
};
