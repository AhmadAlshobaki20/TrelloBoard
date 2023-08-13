// call list model
const List = require("../model/listModel");

exports.getAllList = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json({
      result: lists.length,
      status: "success",
      data: {
        lists: lists,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.createList = async (req, res) => {
  try {
    const newList = await List.create(req.body);
    res.status(200).json({
      newList,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.getList = async (req, res)=>{
  try{
    const listId = req.params.id
    const list = await List.findById(listId);
    res.status(200).json({
      status:"success",
      data:{
        list
      }
    })
  }catch(err){
    res.status(404).json({
      message:err
    })
  }
}
