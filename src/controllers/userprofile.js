const { user, userProfile } = require("../../models");

// exports.getuserProfiles = async (req, res) => {
//   try {
//     const data = await userprofile.findAll()

//     res.send({
//       status: "success",
//       data
//     });

//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };


exports.getuserProfiles = async (req, res) => {
  try {
    const userprofiles = await userProfile.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "idUser"],
        },
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        userprofiles,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getProfile = async (req, res) => {
  try {

    const { id } = req.params;

    const data = await profile.findOne({
      where: {
          id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

