//
//  Ground.swift
//  Spritegame
//
//  Created by Carolyn Yen on 3/10/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import Foundation
import SpriteKit

class Ground: SKSpriteNode, GameSprite {
    var textureAtlas:SKTextureAtlas =
        SKTextureAtlas(named: "Environment")
    var initialSize = CGSize.zero
    // This function tiles the ground texture across the width
    // of the Ground node. We will call it from our GameScene.
    func createChildren() {
        self.anchorPoint = CGPoint(x: 0, y: 1)
        let texture = textureAtlas.textureNamed("ground")
        var tileCount:CGFloat = 0
        // We will size the tiles in their point size
        // They are 35 points wide and 300 points tall
        let tileSize = CGSize(width: 35, height: 300)
        // Build nodes until we cover the entire Ground width
        while tileCount * tileSize.width < self.size.width {
            let tileNode = SKSpriteNode(texture: texture)
            tileNode.size = tileSize
            tileNode.position.x = tileCount * tileSize.width
            // Position child nodes by their upper left corner
            tileNode.anchorPoint = CGPoint(x: 0, y: 1)
            // Add the child texture to the ground node:
            self.addChild(tileNode)
            tileCount += 1
        // Draw an edge physics body along the top of the ground node.
        // Note: physics body positions are relative to their nodes.
        // The top left of the node is X: 0, Y: 0, given our anchor point.
        // The top right of the node is X: size.width, Y: 0
        let pointTopLeft = CGPoint(x: 0, y: 0)
        let pointTopRight = CGPoint(x: size.width, y: 0)
        self.physicsBody = SKPhysicsBody(edgeFrom: pointTopLeft,
                                             to: pointTopRight)
        }
    }
    // Implement onTap to adhere to the protocol:
    func onTap() {}
}
