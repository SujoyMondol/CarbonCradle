// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stars, useGLTF } from '@react-three/drei'
// import { Suspense, useRef } from 'react'
// import * as THREE from 'three'
// import type { GLTF } from 'three-stdlib'

// // Add these type declarations
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       ambientLight: any
//       pointLight: any
//       group: any
//       primitive: any
//     }
//   }
// }

// // GLTF type with nodes and materials
// type GLTFResult = GLTF & {
//   nodes: Record<string, THREE.Mesh>
//   materials: Record<string, THREE.Material>
// }

// function Earth() {
//   const { scene } = useGLTF<GLTFResult>(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/earth/model.gltf'
//   ) as GLTFResult

//   return <primitive object={scene} scale={0.5} rotation={[0, 0, 0]} />
// }

// function Character({ position }: { position: [number, number, number] }) {
//   const group = useRef<THREE.Group>(null!)
//   const { scene } = useGLTF<GLTFResult>(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chibi-girl/model.gltf'
//   ) as GLTFResult

//   return (
//     <group ref={group} position={position} scale={[0.5, 0.5, 0.5]}>
//       <primitive object={scene} />
//     </group>
//   )
// }

// function Scene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <Earth />
//       <Character position={[2, 0, 0]} />
//       <Character position={[-2, 0, 0]} />
//       <OrbitControls 
//         enableZoom={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//       />
//       <Stars radius={100} depth={50} count={5000} factor={4} />
//     </>
//   )
// }

// export default function WorldScene() {
//   return (
//     <div className="h-screen w-full fixed top-0 left-0 z-0">
//       <Canvas 
//         camera={{ position: [0, 0, 8], fov: 50 }}
//         gl={{ antialias: true }}
//       >
//         <Suspense fallback={null}>
//           <color attach="background" args={['#020817'] as [THREE.ColorRepresentation]} />
//           <Scene />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }

// // Preload models with type assertion
// useGLTF.preload(
//   'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/earth/model.gltf'
// ) as unknown as (url: string) => void

// useGLTF.preload(
//   'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chibi-girl/model.gltf'
// ) as unknown as (url: string) => void