//
//  Bee.swift
//  Spritegame
//
//  Created by Carolyn Yen on 3/10/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import Foundation
import SpriteKit

class Bee: SKSpriteNode, GameSprite {
    // We will store our size, texture atlas, and animations
    // as class wide properties.
    var initialSize:CGSize = CGSize(width: 28, height: 24)
    var textureAtlas:SKTextureAtlas = SKTextureAtlas(named:"Enemies")
    var flyAnimation = SKAction()
    
    init() {
        // Call the init function on the base class (SKSpriteNode)
        // We pass nil for the texture since we will animate the
        // texture ourselves.
        super.init(texture: nil, color: .clear, size:
            initialSize)
        // Create and run the flying animation:
        createAnimations()
        self.run(flyAnimation)
        // Attach a physics body, shaped like a circle
        // and sized roughly to our bee.
        self.physicsBody = SKPhysicsBody(circleOfRadius: size.width / 2)
        self.physicsBody?.affectedByGravity = false
        }
    func createAnimations() {
        let flyFrames:[SKTexture] =
            [textureAtlas.textureNamed("bee"),
             textureAtlas.textureNamed("bee-fly")]
        let flyAction = SKAction.animate(with: flyFrames,
                                         timePerFrame: 0.14)
        flyAnimation = SKAction.repeatForever(flyAction)
    }

    
    // onTap is not wired up yet, but we have to implement this
    // function to conform to our GameSprite protocol.
    // We will explore touch events in the next chapter.
    func onTap() {}
    // Lastly, we are required to add this bit of boilerplate
    // to subclass SKSpriteNode. We will need to do this any
    // time we inherit from SKSpriteNode and use an init function
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
}
