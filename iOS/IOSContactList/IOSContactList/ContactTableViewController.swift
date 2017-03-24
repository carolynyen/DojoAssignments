//
//  ContactTableViewController.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class ContactTableViewController: UITableViewController, AddViewControllerDelegate, EditViewControllerDelegate{
    
    var items = [ContactItem]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchallitems()
    }
    
    func fetchallitems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ContactItem")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [ContactItem]
        }
        catch { print("\(error)")
        }
    }
    
    func additem(by controller: AddViewController, firstname: String, lastname: String, number: String) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "ContactItem", into: managedObjectContext) as! ContactItem
        item.firstname = firstname
        item.lastname = lastname
        item.number = number
        items.append(item)
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    func edititem(by controller: EditViewController, firstname: String, lastname: String, number: String, at indexPath: NSIndexPath) {
        items[indexPath.row].firstname = firstname
        items[indexPath.row].lastname = lastname
        items[indexPath.row].number = number
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let optionMenu = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
        let viewAction = UIAlertAction(title: "View", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            self.performSegue(withIdentifier: "ViewSegue", sender: indexPath)
        })
        let editAction = UIAlertAction(title: "Edit", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            self.performSegue(withIdentifier: "EditSegue", sender: indexPath)
        })
        let deleteAction = UIAlertAction(title: "Delete", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            self.managedObjectContext.delete(self.items[indexPath.row])
            do {
                try self.managedObjectContext.save()
            }
            catch {
                print("\(error)")
            }
            self.fetchallitems()
            tableView.reloadData()
        })
        
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel, handler: {
            (alert: UIAlertAction!) -> Void in
        })
        optionMenu.addAction(viewAction)
        optionMenu.addAction(editAction)
        optionMenu.addAction(deleteAction)
        optionMenu.addAction(cancelAction)
        self.present(optionMenu, animated: true, completion: nil)
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath) as! CustomCell
        cell.NameLabel.text = items[indexPath.row].firstname! + " " + items[indexPath.row].lastname!
        cell.NumberLabel.text = items[indexPath.row].number
        return cell
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddSegue" {
            let navigationController = segue.destination as! UINavigationController
            let destination = navigationController.topViewController as! AddViewController
            destination.delegate = self
        }
        else if segue.identifier == "ViewSegue" {
            let ip = sender as! NSIndexPath
            let navigationController = segue.destination as! UINavigationController
            let destination = navigationController.topViewController as! ViewViewController
            destination.firstname = items[ip.row].firstname
            destination.lastname = items[ip.row].lastname
            destination.number = items[ip.row].number
        }
        else if segue.identifier == "EditSegue" {
            let ip = sender as! NSIndexPath
            let navigationController = segue.destination as! UINavigationController
            let destination = navigationController.topViewController as! EditViewController
            destination.delegate = self
            destination.number = items[ip.row].number
            destination.firstname = items[ip.row].firstname
            destination.lastname = items[ip.row].lastname
            destination.indexpath = ip
        }
    }
    
    
    
}
