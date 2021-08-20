const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
  const categoryData= await Category.findAll({
    include:[Product]
  }) 
  res.status(200).json(categoryData)
}catch(err){
  res.status(500).json(err)
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryIdData = await Category.findOne({where:{id:req.params.id}},{
      include:[Product]
    })
    res.status(200).json(categoryIdData)
    
  }catch(err){
    res.status(500).json(err)
  }
  
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const newCategoryData = await Category.create(req.body)
    res.status(200).json(newCategoryData)
  } catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategoryData = await Category.update(req.body, {where:{id:req.params.id}})
    res.status(200).json(updateCategoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategoryData = await Category.delete({where:{id:req.params.id}})
    res.status(200).json(deleteCategoryData)
  }
  catch(err){
res.status(500).json(err)
  }
});

module.exports = router;
