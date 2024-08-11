import { Document, Schema as schemaType, Connection, Model } from 'mongoose';

const modelName = 'accounts';

export interface IAccount extends Document {
    email: string;
    roles: string[];
    tenant: string;
}

const schema = new schemaType({
    email: { type: String, required: true },
    roles: [{ type: String, required: true }],
    tenant: { type: String, required: true },
}, {
    timestamps: true
});

// Function to get the model, ensuring the connection is used correctly
export async function getAccountModel(connection: Connection): Promise<Model<IAccount>> {
    // Check if model already exists and delete if it does to avoid overwrite issues
    try {
        connection.deleteModel(modelName);
    } catch (error) {
        // Model does not exist, no need to handle this
    }

    // Create the model
    const model = connection.model<IAccount>(modelName, schema);
    return model;
}