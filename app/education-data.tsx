export interface Education {
    institution: string;
    degree: string;
    years: string;
    department?: string;
    location?: string;
}

export const education: Education[] = [
    {
        institution: "University of British Columbia",
        degree: "Ph.D. in Bioinformatics",
        years: "2021 - Present",
        department: "Gsponer Lab, Michael Smith Laboratories",
        location: "Vancouver, BC, Canada"
    },
    {
        institution: "Sharif University of Technology",
        degree: "M.Sc. in Artificial Intelligence",
        years: "2018 - 2021",
        location: "Tehran, Iran"
    },
    {
        institution: "Isfahan University of Technology",
        degree: "B.Sc. in Software Engineering",
        years: "2013 - 2018",
        location: "Isfahan, Iran"
    }
]; 