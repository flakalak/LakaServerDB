//Lakalaka Laka
//Information Technology, Arizona State University
//IFT 458: Middleware Prog & Database Sec
//Professor: Dinesh Sthapit
//Due Date: March 16, 2025
//Lakalaka_9231-403_Module5 Lab 1: Using Git with VScode

const loggerMiddleware = (req, res, next) => {
    const user = req.user ? req.user.username : 'Unknown User'; // Assuming 'user' is added to the req object
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    const userAgent = req.get('User-Agent'); // Captures user-agent info (e.g., browser details)

    // Log the user activity
    console.log(`[${timestamp}] ${user} made a ${method} request to ${url} using ${userAgent}`);

    next(); // Proceed to the next middleware
};

module.exports = loggerMiddleware;
