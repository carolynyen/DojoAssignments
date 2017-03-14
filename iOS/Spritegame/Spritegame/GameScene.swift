//
//  GameScene.swift
//  Spritegame
//
//  Created by Carolyn Yen on 3/10/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//
import SpriteKit
class GameScene: SKScene {
    // Create a constant cam as a SKCameraNode:
    let cam = SKCameraNode()
    let ground = Ground()
    let player = Player()
    
    override func didMove(to view: SKView) {
        self.anchorPoint = .zero
        self.backgroundColor = UIColor(red: 0.4, green: 0.6, blue:
            0.95, alpha: 1.0)
        // Assign the camera to the scene
        self.camera = cam
        // Add a second Bee to the scene:
        let bee2 = Bee()
        bee2.position = CGPoint(x: 325, y: 325)
        self.addChild(bee2)
        // ... and a third Bee:
        let bee3 = Bee()
        bee3.position = CGPoint(x: 200, y: 325)
        self.addChild(bee3)
        // Position the ground based on the screen size.
        // Position X: Negative one screen width.
        // Position Y: 150 above the bottom (remember the top
        // left anchor point).
        ground.position = CGPoint(x: -self.size.width * 2, y: 30)
        // Set the ground width to 3x the width of the scene
        // The height can be 0, our child nodes will create the height
        ground.size = CGSize(width: self.size.width * 6, height: 0)
        // Run the ground's createChildren function to build
        // the child texture tiles:
        ground.createChildren()
        // Add the ground node to the scene:
        self.addChild(ground)
        // Position the player:
        player.position = CGPoint(x: 150, y: 250)
        // Add the player node to the scene:
        self.addChild(player)
        
//        bee2.physicsBody?.mass = 0.2
//        bee2.physicsBody?.applyImpulse(CGVector(dx: -25, dy: 0))
         self.physicsWorld.gravity = CGVector(dx: 0, dy: -5)
    }
    
    override func didSimulatePhysics() {
        self.camera!.position = player.position
    }
    
    override func touchesBegan(_ touches: Set<UITouch>,
                               with event: UIEvent?) {
        for touch in (touches) {
    // Find the location of the touch:
    let location = touch.location(in: self)
    // Locate the node at this location:
    let nodeTouched = atPoint(location)
    // Attempt to downcast the node to the GameSprite protocol
    if let gameSprite = nodeTouched as? GameSprite {
        // If this node adheres to GameSprite, call onTap:
        gameSprite.onTap()
        }
    player.startFlapping()
      }
    }
    
    override func update(_ currentTime: TimeInterval) {
        player.update()
    }
    override func touchesEnded(_ touches: Set<UITouch>,
                               with event: UIEvent?) {
        player.stopFlapping()
    }
    override func touchesCancelled(_ touches: Set<UITouch>,
                                   with event: UIEvent?) {
        player.stopFlapping()
    }
  }

//    func addTheFlyingBee() {
//        // Position our bee
//        bee.position = CGPoint(x: 250, y: 250)
//        bee.size = CGSize(width: 28, height: 24)
//        // Add the bee to the scene
//        self.addChild(bee)
//        // Find the bee textures from the texture atlas
//        let beeAtlas = SKTextureAtlas(named:"Enemies")
//        let beeFrames:[SKTexture] = [
//            beeAtlas.textureNamed("bee"),
//            beeAtlas.textureNamed("bee-fly")]
//        // Create a new SKAction to animate between the frames
//        let flyAction = SKAction.animate(with: beeFrames,
//                                         timePerFrame: 0.14)
//        // Create an SKAction to run the flyAction repeatedly
//        let beeAction = SKAction.repeatForever(flyAction)
//        // Instruct our bee to run the final repeat action:
//        bee.run(beeAction)
//        // Set up new actions to move our bee back and forth:
//        let pathLeft =
//            SKAction.moveBy(x: -200, y: -10, duration: 2)
//        let pathRight =
//            SKAction.moveBy(x: 200, y: 10, duration: 2)
//        let flipTextureNegative =
//            SKAction.scaleX(to: -1, duration: 0)
//        let flipTexturePositive =
//            SKAction.scaleX(to: 1, duration: 0)
//        // Combine actions into a cohesive flight sequence
//        let flightOfTheBee = SKAction.sequence([
//            pathLeft,flipTextureNegative, pathRight,
//            flipTexturePositive])
//        // Last, create a looping action that will repeat forever
//        let neverEndingFlight =
//            SKAction.repeatForever(flightOfTheBee)
//        // Tell our bee to run the flight path, and away it goes!
//        bee.run(neverEndingFlight)
//    }
    
    
//    
//    override func didMove(to view: SKView) {
//        self.anchorPoint = .zero
//        // set the scene's background to a nice sky blue
//        // Note: UIColor uses a scale from 0 to 1 for its colors
//        self.backgroundColor = UIColor(red: 0.4, green: 0.6, blue:
//            0.95, alpha: 1.0)
//        let bee = SKSpriteNode()
//        bee.size = CGSize(width: 28, height: 24)
//        bee.position = CGPoint(x: 250, y: 250)
//        self.addChild(bee)
//        let beeAtlas = SKTextureAtlas(named:"Enemies")
//        let beeFrames:[SKTexture] = [
//            beeAtlas.textureNamed("bee"),
//            beeAtlas.textureNamed("bee-fly")]
//        let flyAction = SKAction.animate(with: beeFrames,
//                                         timePerFrame: 0.14)
//        let beeAction = SKAction.repeatForever(flyAction)
//        bee.run(beeAction)
//        // Set up new actions to move our bee back and forth:
//        let pathLeft = SKAction.moveBy(x: -200, y: -10, duration: 2)
//        let pathRight = SKAction.moveBy(x: 200, y: 10, duration: 2)
//        // These two scaleX actions flip the texture back and forth
//        // We will use these to turn the bee to face left and right
//        let flipTextureNegative = SKAction.scaleX(to: -1, duration: 0)
//        let flipTexturePositive = SKAction.scaleX(to: 1, duration: 0)
//        // Combine actions into a cohesive flight sequence for our bee
//        let flightOfTheBee = SKAction.sequence([pathLeft,
//                                                flipTextureNegative, pathRight, flipTexturePositive])
//        // Last, create a looping action that will repeat forever
//        let neverEndingFlight =
//            SKAction.repeatForever(flightOfTheBee)
//        // Tell our bee to run the flight path, and away it goes!
//        bee.run(neverEndingFlight)
//    }
    
//    override func didMove(to view: SKView) {
//        self.anchorPoint = .zero
//        let mySprite = SKSpriteNode(color: .blue, size:
//            CGSize(width: 50, height: 50))
//        mySprite.position = CGPoint(x: 150, y: 150)
//        self.addChild(mySprite)
//        let demoAction = SKAction.move(to: CGPoint(x: 300, y: 150),
//                                       duration: 3)
//        let demoAction = SKAction.scale(to: 4, duration: 5)
//        mySprite.run(demoAction)
//        let demoAction1 = SKAction.scale(to: 4, duration: 5)
        // Rotate 5 radians
//        let demoAction2 = SKAction.rotate(byAngle: 5, duration: 5)
        // Group the actions
//        let actionGroup = SKAction.group([demoAction1, demoAction2])
//        mySprite.run(actionGroup)
        // Group the actions into a sequence
//        let actionSequence = SKAction.sequence([demoAction1, demoAction2])
        // Execute the sequence!
//        mySprite.run(actionSequence)
//    }
