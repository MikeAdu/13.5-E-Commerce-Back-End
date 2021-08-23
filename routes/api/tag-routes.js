const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData= await Tag.findAll({
      include:[Product,Tag, ProductTag]
    }) 
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagIdData = await Tag.findOne({where:{id:req.params.id}},{
      include:[Product,Tag,ProductTag]
    })
    res.status(200).json(tagIdData)
    
  }catch(err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTagData = await Tag.create(req.body)
    res.status(200).json(newTagData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagData = await Tag.update(req.body, {where:{id:req.params.id}})
    res.status(200).json(updateTagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTagData = await Tag.delete({where:{id:req.params.id}})
    res.status(200).json(deleteTagData)
  }
  catch(err){
res.status(500).json(err)
  }
});

module.exports = router;
