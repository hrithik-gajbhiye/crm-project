import User from "../models/user.model.js"
import Task from "../models/task.model.js"

export const getUsers = async (req , res , next) =>{
    try {
        const users = await User.find({role:"user"}).select("-password")
        const userWithTaskCounts = await Promise.all(
            users.map(async(user)=>{
                const pendingTasks = await Task.countDocuments({
                    assignedTo: user._id,
                    status:"pending",

                })
                const inProgressTasks = await Task.countDocuments({
                    assignedTo: user._id,
                    status:"In progress",

                })
                const completedTask = await Task.countDocuments({
                    assignedTo: user._id,
                    status:"Completed",

                })

                return{
                    ...user._doc,
                    pendingTasks,
                    inProgressTasks,
                    completedTask,
                }
            })
        )

        res.status(200).json(userWithTaskCounts)
    } catch (error) {
        next(error)
    }
}