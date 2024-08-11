import linkedinIcon from "./assets/images/svg/linkedin.svg";
import githubIcon from "./assets/images/svg/github.svg";
import instagramIcon from "./assets/images/svg/instagram.svg";
import facebookIcon from "./assets/images/svg/facebook.svg";

export const staticValue = {
    firstName: "Aziz",
    middleName: "Ruri",
    lastName: "Suparman",
    fullName: "",
    phoneNumber: "+6281314277138",
    phoneNumberView: "(+62) 813 1427 7138",
    emailAddress: "me@ruriazz.com",
    nationality: "Indonesia",
    experience: "4+ years",
    freelanceAvailability: true,
    mainLanguage: "Bahasa",
    educations: [
        {
            title: "Bachelor of Informatics Engineering",
            university: "Universitas Esa Unggul",
            period: "2018 - Present",
            location: "Bekasi, Indonesia",
        },
    ],
    experiences: [
        {
            position: "Backend Software Engineer",
            period: "02/2022 - 07/2024",
            company: "PT Oto Klix Indonesia (Otoklix)",
            location: "South Jakarta, Indonesia",
            description: "Otoklix connects vehicle owners with Indonesia's dispersed workshops, enhancing maintenance and offering software solutions and savings.",
        },
        {
            position: "Web Programmer",
            period: "02/2020 - 09/2021",
            company: "PT Togu Inovasi Teknologi",
            location: "Central Jakarta, Indonesia",
            description:
                "Togu provides technological solutions, aiming to enhance convenience in corporate and individual environments through innovative visions and missions.",
        },
    ],
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/ruriazz",
            icon: githubIcon,
        },
        {
            name: "LinkeIn",
            url: "https://www.linkedin.com/in/ruriazz/",
            icon: linkedinIcon,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ruriazz",
            icon: instagramIcon,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/ruriazz",
            icon: facebookIcon,
        },
    ],
};

staticValue.fullName = `${staticValue.firstName} ${staticValue.middleName} ${staticValue.lastName}`;
