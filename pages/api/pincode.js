// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    let pincode = {
        "23250": ["Babu Zai", " Swat"],
        "22780": ["Badhora ", " Swat"],
        "22652": ["Baghpur Dheri ", " Swat"],
        "19010": ["Bahrain ", " Swat"],
        "23220": ["Bakhshali ", " Swat"],
        "21230": ["Balakot ", " Swat"],
        "19240": ["Barikot ", " Swat"],
        "22584": ["Baldher ", " Swat"],
        "22210": ["Bagnotar ", " Swat"],
        "86220": ["Habibabad ", " Balochistan"],    
        "86400": ["Saranan ", " Balochistan"],    
        "86500": ["Bostan ", " Balochistan"],    
    }
    res.status(200).json(pincode)
}