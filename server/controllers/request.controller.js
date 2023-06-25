const requestModel = require('../models/requestModel');

exports.getRequests = async ctx => {
  try {
    ctx.body = await requestModel.getAll();
  } catch (err) {
    ctx.throw(500);
  }
}

exports.postRequest = async ctx => {
  console.log(ctx)
  try {
    console.log(ctx.request.body);
    await requestModel.postNote(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error);
  }
}
