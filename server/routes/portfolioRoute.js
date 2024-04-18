const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfolioModel");

const User = require("../models/userModel")

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();
    const contacts = await Contact.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      contact: contacts[0],
      experience: experiences,
      course: courses,
      project: projects,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-intro", async (req,res)=>{
  try {
    const intro = await Intro.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: intro,
  success: true,
  message : "Intro updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/update-about", async (req,res)=>{
  try {
    const about = await About.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: about,
  success: true,
  message : "About updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-course", async (req,res)=>{
  try {
    const course = await Course.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: course,
  success: true,
  message : "Course updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-experience", async (req,res)=>{
  try {
    const experience = await Experience.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: experience,
  success: true,
  message : "Experience updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-project", async (req,res)=>{
  try {
    const project = await Project.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: project,
  success: true,
  message : "Project updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-contact", async (req,res)=>{
  try {
    const contact = await Contact.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true}
    );
    res.status(200).send({
  data: contact,
  success: true,
  message : "Contact updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
});
//admin login
router.post("/admin-login", async (req,res)=>{
  try {
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    if (user){
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      })
      user.password = ""
    }
    else{
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
    });
  }}
  catch (error) {
    res.status(500).sendStatus(error)
  };
})

module.exports = router;
