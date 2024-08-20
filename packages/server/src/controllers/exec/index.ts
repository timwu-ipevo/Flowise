import { Request, Response, NextFunction } from 'express'
import { exec } from 'child_process';

const postExec = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).send('pong')
    } catch (error) {
        next(error)
    }
}

const executeCommand = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { command } = req.body
	console.log('this is exec')
        if (!command || typeof command !== 'string') {
            throw new Error('Invalid command.')
        }
	console.log('got command ', command)
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`)
                return next(new Error('Command execution failed.'))
            }
            res.json({ stdout, stderr })
        })
    } catch (error) {  
        next(error)
    }
}

export default {
    executeCommand
}
