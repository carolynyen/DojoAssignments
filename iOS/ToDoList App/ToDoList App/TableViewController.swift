//
//  TableViewController.swift
//  ToDoList App
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class TableViewController: UITableViewController, AddItemControllerDelegate{
//    var items = [[String]]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var items = [ItemCell]()
    
    @IBAction func unwind(_ sender: UIStoryboardSegue){
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchallitems()
        tableView.reloadData()
    }
    
    func fetchallitems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ItemCell")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [ItemCell]
        }
        catch { print("\(error)")
        }
    }
    
    func additemcell(title: String, description: String, date: String) {
            let item = NSEntityDescription.insertNewObject(forEntityName: "ItemCell", into: managedObjectContext) as! ItemCell
            item.titletext = title
            item.descriptiontext = description
            item.datetext = date
            items.append(item)
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        tableView.reloadData()
//        items.append([title, description, date])
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell") as! CustomCell
        cell.titlelabel.text = items[indexPath.row].titletext
        cell.descriptlabel.text = items[indexPath.row].descriptiontext
        cell.datelabel.text = items[indexPath.row].datetext
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if let cell = tableView.cellForRow(at: indexPath) {
            if cell.accessoryType == .checkmark {
                cell.accessoryType = .none
            }
            else {
                cell.accessoryType = .checkmark
            }
        }
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddItemController
        destination.delegate = self
    }
    
}
