//
//  ViewController.swift
//  BucketList
//
//  Created by Carolyn Yen on 3/14/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit
import CoreData

class BucketViewController: UITableViewController, AddTableViewControllerDelegate {
    @IBAction func pressedplus(_ sender: Any) {
        performSegue(withIdentifier: "EditSegue", sender: nil)
    }
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var items = [Bucketlistitem]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.reloadData()
        fetchallitems()
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row].text
        return cell
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(items[indexPath.row])
        fetchallitems()
        do {
        try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "EditSegue", sender: indexPath)
    }
    
    func cancelpressed(by controller: UITableViewController){
        dismiss(animated: true, completion: nil)
    }
    
    func fetchallitems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Bucketlistitem")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [Bucketlistitem]
        }
        catch { print("\(error)")
        }
    }
    
    func itemsaved(by controller: UITableViewController, with text: String, at IndexPath: NSIndexPath?){
        
        if let ip = IndexPath {
           let item = items[ip.row]
           item.text = text
        }
        else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "Bucketlistitem", into: managedObjectContext) as! Bucketlistitem
            if text.characters.count > 0 {
                item.text = text
                items.append(item)
            }
        }
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if sender == nil {
            let navigationController = segue.destination as! UINavigationController
            let additemController = navigationController.topViewController as! AddItemController
            additemController.delegate = self
        }
        else {
            let navigationController = segue.destination as! UINavigationController
            let additemController = navigationController.topViewController as! AddItemController
            additemController.delegate = self
            
            let indexPath = sender as! NSIndexPath
            let item = items[indexPath.row]
            additemController.item = item.text!
            additemController.indexpath = indexPath
        }
    }
}

