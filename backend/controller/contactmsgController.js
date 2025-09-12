const ContactMsgModel = require("../model/contact-module")

exports.NewMsg = async (req, res) => {
    try {
        console.log("📩 Incoming form data:", req.body);

        const msg = await ContactMsgModel.create(req.body);

        res.status(200).json({
            success: true,
            msg: "Sent Successfully",
            data: msg
        });
    } catch (error) {
        console.error("❌ Error saving message:", error);
        res.status(500).json({
            success: false,
            msg: error.message || "Unknown error"
        });
    }
};

