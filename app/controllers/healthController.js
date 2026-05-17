export const health = async (req , res) =>{
   try {
     res.status(200).json({
        status: 'success',
        message: 'API is healthy'
    })
   } catch (error) {
    res.status(500).json({ message: 'Server error',
        error: error.message
     });
   }  
}