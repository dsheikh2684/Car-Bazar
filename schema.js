
const joi=require("joi");

module.exports.listingSchema=joi.object({
    listing:joi.object({
        name:joi.string().required(),
        model:joi.string().required(),
        year:joi.number().required().min(1900),
        kms:joi.number().required().min(0),
        fuel:joi.string().required(),
        colour:joi.string().required(),
        owner:joi.string().required(),
        insurance:joi.string().required(),
        i_expiry:joi.date().required(),
        images: joi.array().items(
    joi.object({
      url: joi.string().uri().required(),
      filename: joi.string().required()
    })
  ).required(),
        price:joi.number().required().min(1),
    }).required()
});
