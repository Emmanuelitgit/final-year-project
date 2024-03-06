import  db  from "../db.js";

export const getStaff = (req, res)=>{
    const query = "SELECT * FROM staff WHERE role=?";

    db.query(query, [req.params.role], (err, data) => {
        if (err) return res.send(err)
        
        return res.status(200).json(data)
    })
}