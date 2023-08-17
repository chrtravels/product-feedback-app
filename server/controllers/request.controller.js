const requestModel = require('../models/requestModel');

exports.getRequests = async ctx => {
  try {
    ctx.body = await requestModel.getAll();
  } catch (err) {
    ctx.throw(500);
  }
}

exports.addRequest = async ctx => {
  try {
    await requestModel.postRequest(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error);
  }
}

exports.editRequest = async ctx => {
  try {
    await requestModel.editRequest(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error);
  }
}

exports.deleteRequest = async ctx => {
  try {
    await requestModel.deleteRequest(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error)
  }
}

exports.addComment = async ctx => {
  try {
    await requestModel.postComment(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error);
  }
}

exports.upVote = async ctx => {
  try {
    await requestModel.upVote(ctx.request.body);
    ctx.status = 201;
  } catch (error) {
    ctx.throw(500, error);
  }
}
