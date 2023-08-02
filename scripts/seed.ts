const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try {
          
    await db.category.createMany({
        data: [

            {
                name: "Entrepreneurs"
            },
            {
                name: "Singers"
            },
            {
                name: "Celebreties"
            },
            {
                name: "Influencers"
            },
            {
                name: "Rappers"
            },
            {
                name: "Authors"
            },
            {
                name: "Philosophers"
            },

        ]
    })
        
    } catch (error) {
        console.error("Error seeding default categories", error)
        
    }finally{
        await db.$disconnect();
    }

}

main()