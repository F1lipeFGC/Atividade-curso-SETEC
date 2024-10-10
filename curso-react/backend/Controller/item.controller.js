import Item from '../Models/item.model.js';

export const createItems = async (req, res) => {
    try{ 
        const {text} = req.body;
        const newItem = new Item({text});
        const savedItem = await newItem.save();
        res.status(210).json(savedItem);
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getItems = async (req, res) =>{
    try{
        const items = await Item.find().sort({createAdt: -1});
        res.json(item);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

export const updateItems = async(req, res) =>{
    try{
        const{id} = req.params;
        const{text, isCompleted} = req.body;
        const updateItem = await Item.findByIdAndUpdate(id,
            {text, isCompleted},
            {new: true}
            )
            if (!updateItem){
                return res.status(404).json({message: "Item not found"})
            }
            res.json(updateItem);
            
    }   catch(error){
        res.status(500).json({message: error.message});
    }
};

export const deleteItems = async(res, req) =>{
    try{
        const{id} = req.params;
        const deleteItems = await Item.findByIdAndDelete(id);
        if(!deleteItems){
            return res.status(404).json({message: "Item not found"});
        }
        res.json({message: "Item deleted Successfully."})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

    export const deleteAllItems = async (req, res) =>{
        try{
            await Item.deleteMany({})
            res.json({message: "All items deleted successfully"})
        }catch(error){
            res.status(500).json({message: error.message})
        }

    }
