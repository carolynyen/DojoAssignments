//
//  ViewController.swift
//  BucketList
//
//  Created by Carolyn Yen on 3/14/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit
import os.log

class BucketViewController: UITableViewController, AddTableViewControllerDelegate {
    @IBAction func pressedplus(_ sender: Any) {
        performSegue(withIdentifier: "EditSegue", sender: nil)
    }
    var items = ["go to moon", "be happy", "live"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row]
        return cell
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        items.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "EditSegue", sender: indexPath)
    }
    
    func cancelpressed(by controller: UITableViewController){
        dismiss(animated: true, completion: nil)
    }
    
    func itemsaved(by controller: UITableViewController, with text: String, at IndexPath: NSIndexPath?){
        
        if let ip = IndexPath {
            items[ip.row] = text
            tableView.reloadData()
        }
        else {
            if text.characters.count > 0 {
                items.append(text)
                tableView.reloadData()
            }
        }
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
            additemController.item = item
            additemController.indexpath = indexPath
        }
    }
}

