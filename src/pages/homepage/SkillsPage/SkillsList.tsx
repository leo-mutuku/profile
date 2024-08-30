import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudIcon from "@mui/icons-material/Cloud";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const skills = [
  { name: "Spring Boot", icon: <CodeIcon /> },
  { name: "Express.js", icon: <CodeIcon /> },
  { name: "React", icon: <CodeIcon /> },
  { name: "Angular", icon: <CodeIcon /> },
  { name: "Vue.js", icon: <CodeIcon /> },
  { name: "Git", icon: <GitHubIcon /> },
  { name: "DevOps", icon: <CloudIcon /> },
  { name: "AWS", icon: <CloudIcon /> },
];

function SkillList() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = window.innerWidth < 600 ? 1 : 3; // Show 1 item on mobile, 3 items on desktop

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsToShow, skills.length - itemsToShow)
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <IconButton
        onClick={handlePrev}
        disabled={startIndex === 0}
        style={{ marginRight: "10px" }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div style={{ flex: 1, overflowX: "auto" }}>
        <List
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            margin: 0,
            gap: "20px", // Space between items
          }}
        >
          {skills
            .slice(startIndex, startIndex + itemsToShow)
            .map((skill, index) => (
              <ListItem
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "120px", // Adjust width for responsive design
                }}
              >
                <ListItemIcon
                  style={{
                    minWidth: "0", // Remove minWidth to center icon correctly
                    fontSize: "3rem", // Larger icons
                    marginBottom: "10px", // Space between icon and text
                  }}
                >
                  {skill.icon}
                </ListItemIcon>
                <ListItemText
                  primary={skill.name}
                  primaryTypographyProps={{
                    fontSize: "1.25rem", // Larger font size
                    fontWeight: "bold", // Bold text
                    textAlign: "center", // Center text
                  }}
                />
              </ListItem>
            ))}
        </List>
      </div>
      <IconButton
        onClick={handleNext}
        disabled={startIndex >= skills.length - itemsToShow}
        style={{ marginLeft: "10px" }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

export default SkillList;
