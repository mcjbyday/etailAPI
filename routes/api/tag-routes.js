const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const tags = await Tag.findAll({
      // Add products as a model to JOIN with
      include: { model: Product},
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
      const tag = await Tag.findByPk(req.params.id, {
        // Add products as a model to JOIN with
        // be sure to include its associated Products
        include: { model: Product},
      });
  
      if (!tag) {
        res.status(404).json({ message: 'No tag could be found by that id...' });
        return;
      }
      res.status(200).json(tag);
  } catch (err) {
      res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//   // create a new tag
// });

// router.put('/:id', async (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', async (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;


// // GET a single category
// router.get('/:id', async (req, res) => {
//   // find one category by its `id` value
//   try {
//     const category = await Category.findByPk(req.params.id, {
//       // Add products as a model to JOIN with
//       // be sure to include its associated Products
//       include: { model: Product},
//     });

//     if (!category) {
//       res.status(404).json({ message: 'No category could be found by that id...' });
//       return;
//     }
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // POST / create a single category
// router.post('/', async (req, res) => {
//   // create a new category
//   try {
//     const category = await Category.create(req.body);
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', async (req, res) => {
//   // update a category by its `id` value
//   try {
//     const category = await Category.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!category[0]) {
//       res.status(404).json({ message: 'No category could be found by that id...' });
//       return;
//     }
//     res.status(200).json(category);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// // DELETE a single category
// router.delete('/:id', async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const category = await Category.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!category) {
//       res.status(404).json({ message: 'No category could be found by that id...' });
//       return;
//     }

//     res.status(200).json({ message: 'The requested category was deleted' });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
