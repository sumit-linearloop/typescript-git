import { Router, Request, Response } from 'express';

const router = Router();

interface Item {
  id: number;
  name: string;P{
}

let items: Item[] = [];

// Get all items
router.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

// Get a single item by id
router.get('/items/:id', (req: Request, res: Response) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// Create a new item
router.post('/items', (req: Request, res: Response) => {
  const newItem: Item = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item
router.put('/items/:id', (req: Request, res: Response) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

// Delete an item
router.delete('/items/:id', (req: Request, res: Response) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});

export default router;
