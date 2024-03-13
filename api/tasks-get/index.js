const tasks = [
    {
        id: 1,
        label: "🍔 Eat",
        status: ""
    },
    {
        id: 2,
        label: "🛏 Sleep",
        status: ""
    },
    {
        id: 3,
        label: "</> Code",
        status: ""
    }
];


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.action === 'getTasks') {
        context.res = {
            body: tasks,
            status: 200
        };
    } else {
        context.res = {
            status: 400, // HTTP status code indicating bad request
            body: "Invalid action. Use 'getTasks' to retrieve tasks."
        }    
    };
}