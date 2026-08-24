const fs = require("fs");

fs.writeFile(
    "student.txt",
    "Name: Sahil Kumar\nCourse: Full Stack Development\nTechnology: Node.js",
    (err) => {
        if (err) {
            console.log("Error creating file");
            return;
        }

        console.log("File created successfully");

        fs.readFile("student.txt", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file");
                return;
            }

            console.log(data);

            fs.appendFile(
                "student.txt",
                "\nExperience: 1 Year\nCity: Kolkata",
                (err) => {
                    if (err) {
                        console.log("Error updating file");
                        return;
                    }

                    console.log("Data updated successfully");

                    fs.rename(
                        "student.txt",
                        "studentDetails.txt",
                        (err) => {
                            if (err) {
                                console.log("Error renaming file");
                                return;
                            }

                            console.log("File renamed successfully");

                            fs.unlink("studentDetails.txt", (err) => {
                                if (err) {
                                    console.log("Error deleting file");
                                    return;
                                }

                                console.log("File deleted successfully");
                            });
                        }
                    );
                }
            );
        });
    }
);