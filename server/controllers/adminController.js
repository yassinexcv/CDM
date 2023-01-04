//@desc Get all admins
//@route GET /api/admins
//@access Private
const getAdmin = (req, res) => {
    res.status(200).json({ message : 'Get admins' });
}

//@desc add admin
//@route post /api/admin
//@access Private
const addAdmin = (req, res) => {
    console.log(req.body)    
    res.status(200).json({ message : 'add admin' });
}
//@desc update admins
//@route put /api/admin/:id
//@access Private
const updateAdmin = (req, res) => {
    res.status(200).json({ message : `update admin ${req.params.id} ` });
}
//@desc delet admins
//@route delet /api/admin/:id
//@access Private
const deletAdmin = (req, res) => {
    res.status(200).json({ message : `delete admin ${req.params.id} ` });
}








module.exports = {
    getAdmin,
    addAdmin,
    updateAdmin,
    deletAdmin

}