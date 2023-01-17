import {pool} from '../db.js'
import { empty, notFound, notNumber, notString } from '../filters/employeeFilters.js'

export const getEmployees = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error){
        return res.status(500).json({message: "Algo fue mal"})
    }
}

export const getEmployee = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        if (rows.length <= 0){
            return res.status(404).json({msg: "Employee not found"})
        }
        res.json(rows[0])
    } catch (error){
        return res.status(500).json({message: "Algo fue mal"})
    }
}

export const createEmployees = async (req, res) => {
    try{
        const {name,salary} = req.body

        if(empty(name)) return res.status(404).json({message: "Employees names are required"})
        if(notFound(salary)) return res.status(404).json({message: "Employees salaries are required"})
        if(notString(name)) return res.status(404).json({message: "Employees names must be a string"})
        if(notNumber(salary)) return res.status(404).json({message: "Employees salaries must be a number"})
        
        const [rows] = await pool.query("INSERT INTO employee (name,salary) VALUES (?, ?)",[name,salary])
        
        res.send({ 
            id: rows.insertId,
            name,
            salary
        })

    } catch (error){
        return res.status(500).json({message: "Algo fue mal"})
    }
}

export const deleteEmployees = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0){
            return res.status(404).json({msg: "Employee not found"})
        }
        res.sendStatus(204)
    }
    catch (error){
        return res.status(500).json({message: "Algo fue mal"})
    }
}

export const updateEmployee = async (req, res) => {
    try{
        const {id} = req.params
        const {name,salary} = req.body

        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
        [name, salary, id])
        
        if (result.affectedRows === 0){
            return res.status(404).json({msg: "Employee not found"})
        }

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        res.json(rows[0])
    }
    catch (error){
        return res.status(500).json({message: "Algo fue mal"})
    }
}