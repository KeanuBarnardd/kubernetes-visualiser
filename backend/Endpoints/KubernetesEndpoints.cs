using Microsoft.AspNetCore.Http.HttpResults;
using k8s;
using k8s.Models;

namespace backend.Endpoints;

public static class KubernetesEndpoints
{
    public static void MapKubernetesEndpoints(this WebApplication app)
    {
        app.MapGet("/api/kubernetes/pods", GetPods);
        app.MapGet("/api/kubernetes/nodes", ListNodes);
    }

    private static async Task<Ok<List<string>>> GetPods()
    {
        // Placeholder for actual Kubernetes API call to get pods
        var pods = new List<string> { "pod-1", "pod-2", "pod-3" };
        return TypedResults.Ok(pods);
    }

    private static async Task<Ok<List<string>>> ListNodes()
    {
        // List nodes in Kluster
        var config = KubernetesClientConfiguration.BuildConfigFromConfigFile();
        var client = new Kubernetes(config);

        var nodeList = await client.CoreV1.ListNodeAsync();


        var nodes = nodeList.Items.Select(n => n.Metadata.Name).ToList();


        return TypedResults.Ok(nodes);
    }


    private static async Task<Ok<List<string>>> GetDeployments()
    {
        // Placeholder for actual Kubernetes API call to get deployments
        var deployments = new List<string> { "deployment-1", "deployment-2", "deployment-3" };
        return TypedResults.Ok(deployments);
    }
}